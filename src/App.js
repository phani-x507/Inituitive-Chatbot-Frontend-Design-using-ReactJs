import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
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

      <button className=' btn chat_button_btn borders'>
      <div className='chat_button_div'>
      <img src='L_img.png'></img>
      <div className='chat_button_text borders'>
        <p>Luis-Github</p>
        <label>Hey! i have a questio...</label>
        </div>
      <div className='chat_button_time borders'>
        <span className='chat_button_time_span borders'><i class="bi bi-clock-fill"></i> 3min</span>
      </div>
      </div>

      </button>
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
        </div>

        <div className='ai_copilot_section borders'>
          <div className='ai_copilot_section_buttons' >
            <button className='btn ai_copilot_section_buttons_agent_btn '><i class="bi bi-robot"></i>{"\u00A0"} AI Copilot </button>
            <button className='btn ai_copilot_section_buttons_det_btn '>Details </button>
          </div>
          <hr />

        </div>
      </div>


    </div>

  );
}

export default App;
