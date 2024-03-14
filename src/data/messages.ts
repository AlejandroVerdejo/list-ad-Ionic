export interface Message {
  fromName: string;
  subject: string;
  date: string;
  message: string;
  id: number;
}

const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    message: "Get ready to embark on an unforgettable journey filled with excitement, adventure, and non-stop thrills! From the iconic Las Vegas Strip with its world-renowned casinos, extravagant shows, and gourmet dining experiences, to the breathtaking natural wonders of the nearby Red Rock Canyon and the awe-inspiring Hoover Dam, there's something for everyone in this vibrant desert oasis.Indulge in the luxurious amenities of the city's finest resorts, try your luck at the blackjack tables, catch a spectacular live performance by world-class entertainers, and explore the vibrant nightlife scene that never sleeps.Whether you're seeking a weekend getaway with friends, a romantic escape with your loved one, or a family vacation filled with fun-filled activities, Las Vegas promises to exceed your expectations and leave you with memories that will last a lifetime.So pack your bags, buckle up, and get ready to experience the magic of Las Vegas! Your adventure awaits.",
    id: 0
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 AM',
    message: "Hey, it's been way too long since we last caught up! I hope this message finds you well. Life has been keeping me busy, but I've been thinking about you and our past adventures a lot lately. Remember that time we [insert fun memory or inside joke]? Those were the days! I'd love to hear what you've been up to lately. How's life treating you? Any exciting news or updates? Let's make some time to reconnect soon. It would be awesome to catch up and reminisce about old times. Sending you lots of good vibes and looking forward to hearing from you! Take care",
    id: 1
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    message: "I hope this message finds you well. I'm pleased to inform you that I've received the results of the report we've been eagerly anticipating. 📊 After thorough analysis and review, I'm happy to say that the findings are both insightful and promising. The report provides valuable insights into [briefly mention the subject or purpose of the report], shedding light on important aspects that will guide our decision-making process moving forward. I believe these results will be instrumental in helping us achieve our goals and objectives. I'm currently in the process of reviewing the report in detail, but I wanted to share this update with you as soon as possible. I believe there are several key takeaways that we should discuss further, and I'm looking forward to scheduling a meeting to go over the findings together. Please let me know your availability so we can coordinate a time to discuss the report in more depth. Your input and expertise will be invaluable as we navigate the next steps based on these results. Thank you for your attention to this matter, and I look forward to our discussion. Best regards",
    id: 2

  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    message: "I wanted to provide you all with an update on the current situation regarding [briefly describe the situation or issue]. As many of you are aware, [provide background information if necessary]. Over the past few days, we've been closely monitoring the developments and taking necessary steps to address the challenges at hand. While the situation remains fluid, I want to assure you that our top priority continues to be the safety and well-being of everyone involved. I'm pleased to report that [mention any positive developments or progress made]. However, there are still some areas that require our immediate attention and action. Moving forward, we are implementing [outline the plan or strategies being put in place to address the situation]. It's crucial that we remain proactive and united in our efforts to overcome these obstacles. I understand that this situation may be causing concern or uncertainty for some of you, and I want to encourage open communication and collaboration as we work through it together. If you have any questions, suggestions, or concerns, please don't hesitate to reach out to me or any member of the team. Thank you all for your continued dedication and commitment during this challenging time. Together, I'm confident we will navigate through this successfully and emerge stronger than ever. Best regards",
    id: 3
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    message: "Are you ready to make a splash? 🌊 Join us for some wet and wild fun as we dive into swim lessons! Whether you're a seasoned swimmer looking to perfect your technique or a complete beginner eager to conquer the water, our swim lessons offer something for everyone. Led by certified instructors, these sessions will help you build confidence, improve your skills, and most importantly, have a blast in the pool. Here are the details: 🏊‍♂️ Date: [Insert Date(s)] 🏊‍♀️ Time: [Insert Time] 🏊‍♂️ Location: [Insert Location] 🏊‍♀️ What to Bring: Swimsuit, towel, sunscreen, and a positive attitude! Don't miss out on the opportunity to make a splash and learn some new tricks in the water. It's going to be an unforgettable experience! Please RSVP by [Insert RSVP Deadline] to secure your spot. Space is limited, so be sure to reserve your place early. Can't wait to see you there! Best regards",
    id: 4
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    message: "I hope this message finds you well. I'm reaching out to inquire about [specific topic]. I've been [briefly explain your interest or reason for the inquiry]. I was wondering if you could provide some insight or clarification on [specific aspect of the topic]. Your expertise in this area would be greatly appreciated, and I believe your input could help [mention how the information will be beneficial or relevant]. If you have some time to discuss this further, I would be grateful. Alternatively, if you could point me in the direction of someone who might be able to assist, that would be fantastic as well. Thank you in advance for your assistance. I look forward to hearing from you soon. Best regards",
    id: 5
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    message: "Dear Family, As we continue to juggle our busy schedules and various commitments, I wanted to propose a solution to help us stay organized and ensure we're all on the same page. Let's create a family calendar! A family calendar will serve as a centralized hub where we can keep track of important dates, appointments, events, and activities for each member of the family. By having everything in one place, we can avoid double bookings, conflicts, and missed opportunities to spend quality time together. Here's how we can set it up: Choose a Platform: We can opt for a physical calendar hung in a central location at home or utilize a digital platform such as Google Calendar, which allows us to access and update it from anywhere. Color Code: Assign a unique color to each family member to easily identify their entries on the calendar. This will make it clear who's involved in which activity or event. Regular Updates: Let's make it a habit to update the calendar regularly with new appointments, commitments, and changes to existing plans. This way, we can ensure the calendar remains accurate and up-to-date. Communication: Use the calendar as a tool for communication by leaving notes or reminders for each other. This will help keep everyone informed and ensure nothing slips through the cracks. Family Meetings: Schedule regular family meetings to review the calendar together, discuss upcoming events, and address any conflicts or concerns. By implementing a family calendar, we can streamline our scheduling process, reduce stress, and create more harmony in our daily lives. Let's work together to make it happen! Looking forward to your input and collaboration. Best regards",
    id: 6
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    message: "Dear Team, I hope this message finds you well. As we move forward with our [project/event], it's essential to have placeholders for headshots until we finalize the actual images. These placeholders will serve as temporary placeholders to ensure the visual aspects of our project are cohesive and professional. Here's how we can proceed: Selecting Placeholder Images: Let's choose generic headshot images that align with the demographics or themes of our project/event. These images should be neutral and versatile to accommodate various purposes. Resolution and Format: Ensure that the chosen images are of high resolution and suitable format for our project requirements. This will ensure optimal visual quality when incorporated into our materials. Placement and Usage: Place the placeholder headshots in the designated areas within our project materials, such as presentations, websites, or promotional materials. Clearly label them as placeholders to avoid confusion. Updating Process: Keep track of any updates or changes to the actual headshots and replace the placeholders accordingly. Regularly review the placeholders to ensure they remain relevant and accurate. Feedback and Approval: Seek feedback from relevant stakeholders to ensure the chosen placeholder headshots align with the overall vision and objectives of our project/event. By implementing placeholder headshots, we can maintain a professional appearance and ensure continuity in our visual representation, even as we finalize the actual images. Please let me know if you have any questions or suggestions regarding this process. Your input is valuable as we strive to create a polished and cohesive presentation for our project/event. Thank you for your attention to this matter. Best regards",
    id: 7
  },
  {
    fromName: "K",
    subject: "Placeholder",
    date: "Today",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: 8
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
