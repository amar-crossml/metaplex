import { Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

const { Content } = Layout;

export const HowitWorksView = () => {
  
  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <h2>QUICK SUMMARY:</h2>
          <ol>1. Have an account on either Coinbase, Gate.io or other exchange.</ol>

          <ol>2. Make sure you have a SOL compatible wallet installed on your web browser. <br />
We Recommend: <a href="https://phantom.app/" target="_blank">Phantom</a> wallet<br />
Alternatives include <a href="https://solflare.com/" target="_blank">Solflare</a>, <a href="https://mathwallet.org/en-us/" target="_blank">Math Wallet</a>, <a href="https://www.ledger.com/" target="_blank">Ledger</a></ol>


<ol>3. Fund your SOL wallet</ol>

<ol>4. Go to tiles.blockcities.com</ol>

<ol>5. Connect your wallet</ol>

<ol>6. Pick your desired NFT and make a purchase.</ol>



<h2 style={{marginTop:'20px'}}>DETAILED INSTRUCTIONS USING COINBASE:</h2>

<h3 style={{color:'#ffffff', margin:'10px 0'}}>Step 1: Set up a free Coinbase account</h3>
<ol>1. Go to <a href="https://www.coinbase.com/" target="_blank">https://www.coinbase.com</a> and click Sign Up</ol>
<ol>2. Follow their prompts to create your account</ol>
<ol>3. Once your account is set up, click the Buy / Sell button in the top right corner of the site
    <br />
    <img src="/how_it_works1.png" style={{margin:'15px 0' }} />
</ol>
<ol>4. If you haven’t already done so, you’ll need to add a payment method. Coinbase will prompt you to do so; you can easily link your bank account, enter a debit card, or connect your account to an existing PayPal.
    <br />
    <img src="/how_it_works2.png" style={{margin:'15px 0' }} /></ol>
<ol>5. Once your payment method has been added, you’ll see something like this in the Buy / Sell modal window:
    <br />
    <img src="/how_it_works3.png" style={{margin:'15px 0' }} /></ol>
<ol>6. While I’ll never tell anyone not to buy Bitcoin, for buying NFTs on Solana, we’ll need to buy SOL. Click this so we can change the asset to Solana.
    <br />
    <img src="/how_it_works4.png" style={{margin:'15px 0' }} /></ol>
<ol>7. Type SOL into the search bar and click on Solana (SOL) below the search bar, then click the back arrow icon in the top left.
    <br />
    <img src="/how_it_works5.png" style={{margin:'15px 0' }} /></ol>
<ol>8. You should now see this: 
    <br />
    <img src="/how_it_works6.png" style={{margin:'15px 0' }} /><br />
You can purchase whatever amount you are comfortable with. This totally depends on how much you are looking to spend — the beauty of NFTs on Solana is that the fees are very low (pennies on the dollar) and the NFT projects are still new — more are launching every day! I would suggest at least a few SOL to start with, but it’s completely up to you.</ol>
<ol>9. Select or enter the amount you want to purchase, then click Preview Buy (you won’t be charged yet).</ol>
<ol>10. Click Buy Now on the next screen to complete your purchase. 
    <br />
    <img src="/how_it_works7.png" style={{margin:'15px 0' }} /></ol>

<p style={{color:'#ffffff' }}>Congratulations! You just bought your first crypto! Now, let’s get some NFTs!</p>

<h3 style={{color:'#ffffff', margin:'10px 0'}}>Step 2: Create your Solana wallet</h3>
<p style={{color:'#ffffff' }}>We’ll be using Phantom wallet, but there are other options such as Sollet and Solflare. I prefer Phantom, it’s very user-friendly and you can view your NFTs right in your wallet! Let’s set one up.</p>


<ol>1. Go to <a href="https://phantom.app/" target="_blank">https://phantom.app/ </a></ol>
<ol>2. Depending on the browser you’re using, you’ll see an Add to Browser button in the middle and in the top right corner of the page. Click it! 
    <br />
    <img src="/how_it_works8.png" style={{margin:'15px 0' }} /></ol>
<ol>3. Follow their instructions (browser-dependent) to add it as an extension to your browser.</ol>
<ol>4. Once it’s added, you should see a screen with this prompt: 
    <br />
    <img src="/how_it_works9.png" style={{margin:'15px 0' }} /></ol>
<ol>5. Click Create New Wallet</ol>
<ol>6. On the Secret Recovery Phrase screen, you’ll see a string of random words. It is VERY IMPORTANT to write this down on PHYSICAL PAPER and keep it in a safe place — treat it like a personal document you’d keep in a safe, deposit box, and remember where it is! If you were to lose your computer or lose access to your wallet, you’ll need the recovery phrase to get back into it.</ol>
<ol>7. Create a password on the next screen and continue through the prompts. <br />
You should now see the Phantom icon in your browser’s menu bar (top right corner). 
    <br />
    <img src="/how_it_works10.png" style={{margin:'15px 0' }} /></ol>

<p style={{color:'#ffffff' }}>
Clicking on this icon will open your wallet. Enter your password when prompted, and you’ll see your wallet balance. At this point, we haven’t transferred any funds, so it will be empty.</p>

<h3 style={{color:'#ffffff', margin:'10px 0'}}>Step 3: Transfer $SOL to your Phantom wallet</h3>
<p style={{color:'#ffffff' }}>Your wallet has what is known as an address. This address is public; there is no security concern in sharing this address with others. Your address can be seen and copied in the top menu bar, as seen below where it says Wallet 1 (BP1z…cGvC). Clicking on this will copy your wallet’s address to your clipboard. Alternatively, you can click the Receive button, select the asset you want to deposit, and copy your wallet address on the screen. We’ll get to this in a moment.<br />
    <img src="/how_it_works11.png" style={{margin:'15px 0' }} /></p>

<p style={{color:'#ffffff' }}>Time to tie the Coinbase step and the Phantom step together! In order to buy NFTs on the Solana platform, we essentially need to use Solana as a currency. The sites that sell NFTs (which I’ll list below) connect to our Phantom wallet, which is how we transact our $SOL for NFTs.</p>

<p style={{color:'#ffffff' }}>You might be wondering why we need to use Coinbase + Phantom — why can’t we buy $SOL directly in our Phantom wallet? A short answer is that Phantom is designed to store our assets — it does not have the infrastructure to support direct payments. Coinbase handles this, is easy to use, and connects right to your bank for ease of directly transferring USD.</p>

<p style={{color:'#ffffff' }}>Let’s send our $SOL from Coinbase to our Phantom wallet.<br />
    <img src="/how_it_works12.png" style={{margin:'15px 0' }} /></p>


<ol>1. In Coinbase, click the Send / Receive button in the top right corner of the page.</ol>
<ol>2. Click the Phantom wallet icon in the menu bar of your browser and copy your wallet address as explained above.</ol>
<ol>3. In Coinbase, in the To field, paste your Phantom wallet address.</ol>
<ol>4. You can optionally include a note, but it’s not necessary.</ol>
<ol>5. In the Pay with field, change it to Solana like we did earlier when we made our initial Solana purchase.</ol>
<ol>6. Click Continue (it will not send yet, you will see another confirmation screen first).</ol>
<ol>7. Click Send Now.</ol>

<p style={{color:'#ffffff' }}>Wait ~1–2 minutes… maybe less! Then, open your Phantom wallet again. You should now see the Solana that we just sent from Coinbase!</p>

<h3 style={{color:'#ffffff', margin:'10px 0'}}>Step 4: Buy your first NFT!</h3>
<p style={{color:'#ffffff' }}>Here we are, the exciting part! Currently, we have three main types of NFT’s available:</p>

<ol><strong>- Hexagonal Tiles.</strong> These will provide a share in transaction fees for all functions executed in the corresponding area once the Blockcities platform goes live.</ol>
<ol><strong>- Keys to the City.</strong> Use “Proof of NFT” to get access to future discounts and private events.</ol>
<ol><strong>- Passports.</strong> Provides early access to token presale.</ol>

<p style={{color:'#ffffff' }}>Regardless of which NFT you buy, you’ll be able to view it in your wallet.</p>
    </Layout>
  );
};
