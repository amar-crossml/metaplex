import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';
import { CardLoader } from '../../components/MyLoader';
import { useCreator, useCreatorArts } from '../../hooks';

export const ArtistView = () => {
  const { id } = useParams<{ id: string }>();
  const creator = useCreator(id);
  const artwork = useCreatorArts(id);

  const artworkGrid = (
    <div className="artwork-grid">
      {artwork.length > 0
        ? artwork.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  artView={true}
                />
              </Link>
            );
          })
        : [...Array(6)].map((_, idx) => <CardLoader key={idx} />)}
    </div>
  );

  return (
    <>
      <Col>
        <Divider />
        <Row
          style={{ margin: '0 30px', textAlign: 'left', fontSize: '1.4rem' }}
        >
          <Col span={24}>
            <h3 className="" style={{color:'white'}}>ABOUT THE NFT's</h3>
            <br />
            <h4 style={{color:'white'}}>Creater Address</h4>
            <h5 style={{color:'white'}} >
              {/* <MetaAvatar creators={creator ? [creator] : []} size={100} /> */}
              {creator?.info.name || creator?.info.address}
            </h5>

            <div className="info-content">{creator?.info.description}</div>
            <div className="info-content">
            <h4 style={{marginTop:'30px',color:'white'}}>About Blockcities</h4>
            <h5 style={{color:'white'}}>Users design the future they wish to experience using blockchain powered Voting, Pre-Reservation and Investment, where concepts are brought into physical form through tokenization.</h5>
            <h4 style={{marginTop:'30px',color:'white'}}>A Sandbox for the Physical World</h4>
            <h5 style={{color:'white'}}>We've created a geographically linked digital hexagonal grid layer that spans across the entire planet, allowing people to claim ownership of Virtual Land in the form of hexagon tiles.
            Once a virtual tile is purchased, it unlocks new capabilities in the real world for that location. Unlock blockchain based Voting, Smart Escrow, Tokenization, Rental of Assets and more.
            Monetization opportunities are created for Virtual Land holders through revenue sharing on transaction fees, anytime functions are executed in the area.
            </h5>
            </div>
            <br />
            <h3 className="" style={{color:'white'}}>AVAILABLE</h3>

            {/* <div className="info-header">AVAILABLE</div> */}
            {artworkGrid}
          </Col>
        </Row>
      </Col>
    </>
  );
};
