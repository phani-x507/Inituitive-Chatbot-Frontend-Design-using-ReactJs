import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


function App() {
 

  


  function getChats(){
  const chatData = {
    "Luis-Github": {
      "name": "Luis Easton",
      "time": "3min",
      "received_time": "45m",
      "message": "Hey! I have a question...",
      "status": "open",
      "img": "L_img.png"
    },

    "Ivan - Nike" :{
      "name": "Ivan - Nike",
      "time": "5min",
      "message": "Hey there, I have a qu..",
      "status": "open",
      "received_time": "30m",
      "img": "I_img.png"
    },

    "Lead from New York" :{
      "name": "Lead from New York",
      "time": "10min",
      "message": "Good morning, let me...",
      "status": "open",
      "received_time": "45m",
      "img": "L_img.png"
    },

    "Booking API Problems" :{
      "name": "Booking API Problems",
      "time": "15min",
      "message": "Bug Report...",
      "status": "open",
      "received_time": "45m",
      "img": "third_img.png"
    },
    "Miracle - Exemplary Banks" :{
      "name": "Miracle - Exemplary Banks",
      "time": "20min",
      "message": "Hey there, I'm here to...",
      "status": "open",
      "received_time": "45m",
      "img": "fourth_img.png"
    }
    // Add more chat data as needed
  };

  
return Object.entries(chatData).map(([key, chat]) => (
    <button key={key} className='btn chat_button_btn borders'>
      <div className='chat_button_div'>
        <img src={chat.img} alt={chat.name} />
        <div className='chat_button_text borders'>
          <p>{chat.name}</p>
          <p className='label'>{chat.message}</p>
        </div>
        <div className='chat_button_time borders'>
          <span className='chat_button_time_span borders'>
            <i className="bi bi-clock-fill"></i> {chat.time}
          </span>
          <br />
          <span
            className='chat_button_time_span borders'
            style={{ backgroundColor: 'transparent', fontWeight: 400, color: 'grey' }}
          >
            {chat.received_time}
          </span>
        </div>
      </div>
    </button>
  ));
}

  return (
    // Main Div. Contains all the components

    <div className='main_div borders'>
      {/* Main body Div for center allignment */}

      <div className='body_div borders'>
        <div className='inbox_section borders'>
          {/* Inbox Section for Chats */}
          <h4 className='heading_h4'>Your inbox</h4>
          <hr />

          <div className='inbox_section_buttons'>

            <button className='btn inbox_section_top_buttons' > 5 Open  <b><i class="bi bi-chevron-down"></i></b></button>
            <button className='btn inbox_section_top_buttons' > Waiting Longest <b><i class="bi bi-chevron-down"></i></b></button>

            
          </div>
{getChats()}
      
 {/* Ending of Inbox Section for Chats */}
        </div>

        <div className='chat_section borders'>
          {/* Converting heading into two sections. one for title and other for buttons */}
          <div className='chat_section_heading borders'>
            {/* chat_section_title is for title of the Chat */}
            <div className='chat_section_title borders'>
              {/* Chat Section Title */}
              <h4 className='heading_h4'>Luis Easton</h4>

            </div>

            <div className='chat_section_title_buttons borders'>
              {/* button for chat options */}
              <button className='btn chat_section_title_button'><i class="bi bi-three-dots"></i></button>
              {/* Button for Dark Mode */}
              <button className='btn chat_section_title_button'><i class="bi bi-moon-stars-fill"></i></button>

              <button className='btn btn chat_section_title_button1' ><i class="bi bi-box2-heart-fill"></i>{"\u00A0"} Close</button>
            </div>


          </div>
          <hr style={{ 'margin-top': '1px' }} />

          {/* Chat Messages  */}
          <div className='Chat_section_messages borders'>

  {/* Chat Message Style For Incomming Messages  */}
            <div className='chat_section_messages_div borders'>
              <img src="L_img.png" alt="Luis Easton" />
              <div className='chat_section_messages_text borders'>
                <p>I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.</p>
                <p className='label' style={{color:'grey','font-size':'10px'}} ><i class="bi bi-chat-right-dots-fill"></i> &nbsp;3min</p>
              </div> 
              
            </div>

                        {/* Chat Message Style For Outgoing Messages  */}
            <div className='chat_section_messages_div outgoing borders'>
              
              <div className='chat_section_messages_text borders'>
                <p>Let me just look into this for you, Luis.</p>
                <p className='label'>Seen - 5min</p>
              </div>
              <img src="sample_img.jpg" alt="Luis Easton" />
            </div>
            

          </div>

      {/* Chat Section Input */}
          <div className='chat_section_input borders'>
            <button className='btn chat_section_optn_btn'><i class="bi bi-chat-right-text-fill"></i>  Chat  &nbsp;<i class="bi bi-chevron-down"></i></button><br></br>

            <textarea className='chat_section_input_text' placeholder='Type your message here...'></textarea>
        {/* Sending Div */}
            <div className='chat_section_sending_div borders'>
              <div className='chat_section_sending_div_left'>
                  <button className='btn ' ><i class="bi bi-lightning-charge-fill"></i></button>|
                  <button className="btn" ><i class="bi bi-bookmark-dash-fill"></i></button>
                  <button className="btn" ><i class="bi bi-emoji-laughing-fill"></i></button>
              </div>

              <div className='chat_section_sending_div_right'>

                <button className='btn chat_section_sending_div_right_btn' disabled >Send &nbsp;|&nbsp;  <i class="bi bi-send-fill"></i> </button>
              </div>
          </div>
          </div>

          
        </div>




{/* This is AI and Details Section */}
        <div className='ai_copilot_section borders'>
          <div className='ai_copilot_section_buttons' >
            <button className='btn ai_copilot_section_buttons_agent_btn '><i class="bi bi-robot"></i>{"\u00A0"} AI Copilot </button>
            <button className='btn ai_copilot_section_buttons_det_btn '>Details </button>
          </div>
          <hr />
          <div className='ai_copilot_chat_section'>
             

             <div className ="ai_copilot_chat_input borders">
              <button className='btn ai_chat_suggestions' ><b>Suggested</b> <i class="bi bi-cash"></i> How do I get a refund?  </button>
              <div className='ai_copilot_chat_input_div borders'>
              <input type="text" className='ai_copilot_chat_input_text' placeholder="Ask a question..."></input>
              <button className="btn ai_copilot_chat_input_send"  style={{'box-shadow':'none'}}><i class="bi bi-arrow-up-short"></i></button>
              </div>
             </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default App;
