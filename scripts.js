<!doctype html>
<html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Vote for Your Idol</title> 
  <link rel="stylesheet" href="styles.css"> 
 </head> 
 <body> 
  <header> 
   <h1>Vote for Your Favorite Idol</h1> 
  </header> 
  <div class="container"> 
   <div class="idol" id="idol1" onclick="vote('idol1')"> 
    <h2>MS Dhoni</h2> 
    <p>Total Votes: <span id="idol1-votes">0</span></p> 
   </div> 
   <div class="idol" id="idol2" onclick="vote('idol2')"> 
    <h2>Ronaldo</h2> 
    <p>Total Votes: <span id="idol2-votes">0</span></p> 
   </div> 
   <div class="idol" id="idol3" onclick="vote('idol3')"> 
    <h2>Messi</h2> 
    <p>Total Votes: <span id="idol3-votes">0</span></p> 
   </div> 
   <div class="idol" id="idol4" onclick="vote('idol4')"> 
    <h2>Virat Kohli</h2> 
    <p>Total Votes: <span id="idol4-votes">0</span></p> 
   </div> 
  </div> <!-- Modal Popup --> 
  <div id="voteModal" class="modal"> 
   <div class="modal-content"> <span class="close-btn" onclick="closeModal()">×</span> 
    <h2>Thank You for Voting!</h2> 
    <p id="modal-message"></p> 
    <div class="share-message"> 
     <p>Share your vote:</p> <a id="share-whatsapp" href="#" target="_blank">Share on WhatsApp</a> <a id="share-instagram" href="#" target="_blank">Share on Instagram</a> 
    </div> 
   </div> 
  </div> 
  <script src="scripts.js"></script> 
 
<script type="text/javascript" id="dcoder_script">// Initialize votes and tracked users
const votes = {
    idol1: 0, // MS Dhoni
    idol2: 0, // Ronaldo
    idol3: 0, // Messi
    idol4: 0  // Virat Kohli
};

const votedUsers = new Set(); // Track user votes

// Function to handle voting
function vote(idol) {
    // Simulate user ID (in a real app, this would be user-specific)
    const userId = 'user123'; // Replace with actual user ID logic

    if (!votedUsers.has(userId)) {
        votes[idol]++;
        votedUsers.add(userId);
        document.getElementById(idol + '-votes').innerText = votes[idol];
        showModal(idol);
    } else {
        alert('You have already voted!');
    }
}

// Function to show modal with vote result and share options
function showModal(idol) {
    const modal = document.getElementById('voteModal');
    const idolName = document.getElementById(idol).querySelector('h2').innerText;
    const message = `You have voted for ${idolName}. Check out the voting results here: [Your Website URL]`;

    document.getElementById('modal-message').innerText = message;

    // Set share URLs
    const websiteUrl = encodeURIComponent('https://www.yourwebsite.com'); // Replace with your actual website URL
    const shareText = encodeURIComponent(message);

    // WhatsApp sharing URL
    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${shareText} ${websiteUrl}`;
    
    // Instagram Stories sharing URL - note: Instagram does not have a direct API for story sharing from the web, so this will redirect to Instagram app or web with a prefilled message
    document.getElementById('share-instagram').href = `https://www.instagram.com/create/story/?text=${shareText}%20${websiteUrl}`;

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('voteModal').style.display = 'none';
}

// Close modal if clicked outside of it
window.onclick = function(event) {
    const modal = document.getElementById('voteModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
</script></body></html>
