# HackHer
[Pulse911] 🎯

Basic Details

Team Name: [HackHer]

Team Members

Member 1: [Jothsna Mariyam George] - [Model engineering College]
Hosted Project Link

[mention your project hosted project link here]

Project Description

Overview

Pulse911 is an emergency medical assistance app designed to provide immediate healthcare solutions to users in critical situations. The app aims to bridge the gap between patients and healthcare providers by offering multiple emergency response features, including direct doctor calls, AI-based disease consultations, medicine purchases, and ambulance services.

The Problem statement

Problem Statement for Pulse911
In medical emergencies, quick access to healthcare professionals, ambulances, and medicines can mean the difference between life and death. However, many people face challenges such as:

Delayed medical assistance due to a lack of immediate doctor availability.
Limited access to ambulances, causing critical time loss.
Uncertainty about symptoms, leading to incorrect self-diagnosis and delayed treatment.
Difficulty in purchasing urgent medications, especially at odd hours.


The Solution


Pulse911 provides an all-in-one emergency medical assistance platform, enabling users to instantly connect with doctors, consult an AI for symptom analysis, order medicines, and request an ambulance—ensuring faster response times and better healthcare accessibility.



Technical Details

Technologies/Components Used

For Software:


Here is a comprehensive breakdown of the **technologies used** in all the code snippets you shared:

### **Languages Used:**
- **JavaScript (ES6+)** (for writing React components, functional components, and handling props)

### **Frameworks Used:**
- **React** (for building UI components using functional components, hooks, and `forwardRef` for passing references)
- **Next.js** (for handling API routes in the first two code examples)
  
### **Libraries Used:**
- **Radix UI** (`@radix-ui/react-slot` for creating flexible and composable components using slots)
- **Class Variance Authority (CVA)** (`cva` for managing conditional class names with variants in the button component)
- **Tailwind CSS** (implied from utility class names like `h-9`, `w-full`, `rounded-md`, `bg-card`, `text-muted-foreground`, etc.)
- **Next.js** (`next/server` and `NextResponse` for building API endpoints)

### **Tools Used:**
- **React Forward Ref** (`React.forwardRef` to forward references to child components)
- **Dynamic Class Name Management** (`cn` function for conditionally applying class names in components)
- **Utility Libraries** (`cn` likely from a utility library like `classnames` for managing conditional styles)
- **API Routes** (for handling data fetching and server-side logic in Next.js)
- **Query Parameters** (for filtering data based on URL query parameters in API requests)
- **State Management and Conditional Rendering** (via props in React components to customize behavior and appearance)

This combination of tools, libraries, and frameworks makes the code modular, flexible, and easy to maintain across your application.
For Hardware:

[nil




Implementation


For Software:






Installation
Here are the installation commands for all the dependencies used in your code:  

### **1. Initialize a Next.js Project (If Not Already Done)**  
```sh
npx create-next-app@latest my-app
cd my-app
```

### **2. Install Required Dependencies**  
```sh
# Install Next.js (if not installed)
npm install next react react-dom  

# Install Radix UI
npm install @radix-ui/react-slot  

# Install Class Variance Authority (CVA)
npm install class-variance-authority  

# Install Tailwind CSS (if using)
npm install tailwindcss postcss autoprefixer  
npx tailwindcss init -p  

# Install Google Generative AI SDK (for Gemini API)
npm install @google/generative-ai  

# Install Dotenv (for environment variables)
npm install dotenv  

# Install Utility Libraries (if cn utility is custom, install classnames)
npm install classnames  
```

### **3. Set Up Tailwind CSS (If Using)**
Ensure your **`tailwind.config.js`** is set up properly, including paths to your components.  
```sh
npx tailwindcss init -p  
```

### **4. Set Up Environment Variables**  
Create a **`.env.local`** file and add your API key:  
```
GEMINI_API_KEY=your_google_gemini_api_key
```

### **5. Run the Development Server**
```sh
npm run dev
```




Run

Here are the commands to **run** your Next.js project with all the installed dependencies:  

### **1. Start the Development Server**  
```sh
npm run dev
```
This runs the Next.js app locally at **http://localhost:3000/**.

---

### **2. Build for Production**  
```sh
npm run build
```
This creates an optimized production build.

---

### **3. Start the Production Server**  
```sh
npm start
```
Runs the production build.

---

### **4. Run with Environment Variables**  
If you need to load environment variables, use:  
```sh
GEMINI_API_KEY=your_api_key npm run dev
```
or create a **`.env.local`** file and simply run:  
```sh
npm run dev
```

---

### **5. Run with Tailwind JIT Mode (if using Tailwind CSS)**  
```sh
NODE_ENV=development npm run dev
```
This ensures Tailwind CSS is optimized for development.

---

Let me know if you need more details! 🚀

Project Documentation

For Software:Here's a structured **Project Documentation** template for your software, **Pulse911**, which connects people with nearby doctors in emergencies. You can modify it based on your needs.  

---

# **Pulse911 - Project Documentation**  

## **1. Overview**  
### **Project Name:** Pulse911  
### **Description:**  
Pulse911 is a medical emergency response app that connects users with nearby doctors, allowing them to:  
- Call a doctor for an in-person visit.  
- Consult an AI assistant for preliminary medical guidance.  
- Order medicine online.  
- Request an ambulance.  

## **2. Features**  
- **Doctor Locator:** Find and connect with the nearest available doctors.  
- **AI Medical Assistant:** Get initial health information through an AI chatbot.  
- **Medicine Ordering:** Purchase prescribed medicines within the app.  
- **Emergency Services:** Call an ambulance in critical situations.  
- **User Profiles:** Manage personal health information and preferences.  

## **3. Tech Stack**  
### **Frontend:**  
- **Framework:** React, Next.js  
- **UI Library:** Radix UI, Tailwind CSS  
- **State Management:** React Hooks  

### **Backend:**  
- **Framework:** Next.js API Routes  
- **Database:** Firebase / MongoDB (or any suitable database)  
- **Authentication:** Firebase Auth / NextAuth  

### **AI & API Services:**  
- **AI Integration:** Google Gemini API (`@google/generative-ai`)  
- **Maps & Location:** Google Maps API  
- **Payment Gateway:** Stripe / Razorpay (for medicine orders)  

## **4. Installation & Setup**  
### **Prerequisites:**  
- **Node.js** installed (LTS version)  
- **Git** for version control  
- **Environment Variables** setup in `.env.local`  

### **Installation Steps:**  
```sh
# Clone the repository
git clone https://github.com/your-repo/pulse911.git
cd pulse911

# Install dependencies
npm install

# Start the development server
npm run dev
```

### **Environment Variables (`.env.local`):**  
```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_STRIPE_API_KEY=your_stripe_api_key
```

## **5. API Endpoints**  
### **1. Get Nearby Doctors**  
**Endpoint:** `/api/doctors`  
**Method:** `GET`  
**Query Params:**  
- `specialty` (optional) - Filter doctors by specialty  
- `maxDistance` (optional) - Filter by maximum distance  

### **2. AI Chatbot (Medical Assistant)**  
**Endpoint:** `/api/ai-chat`  
**Method:** `POST`  
**Request Body:**  
```json
{
  "message": "What should I do for a fever?"
}
```

## **6. Deployment**  
- **Hosting:** Vercel / Firebase Hosting  
- **Database Hosting:** Firebase / MongoDB Atlas  
- **CI/CD:** GitHub Actions (for automatic deployments)  

## **7. Contribution Guidelines**  
1. Fork the repository and create a new branch.  
2. Commit changes with clear messages.  
3. Submit a pull request for review.  

---

This documentation provides a **clear structure** for your project, covering **installation, features, API details, and deployment.** 

Screenshots (Add at least 3)

![image](https://github.com/user-attachments/assets/33ac62c3-39d3-4382-beff-efb10e422e12)






![image](https://github.com/user-attachments/assets/a4f62e41-baf6-4625-9715-eea241d0b730)






![image](https://github.com/user-attachments/assets/b9ede277-4f26-4750-a869-716f85f30989)

![image](https://github.com/user-attachments/assets/9d8aea9f-571d-4ab8-b34f-903c2d26e290)



Diagrams

![Workflow](Add your workflow/architecture diagram here) Add caption explaining your workflow

For Hardware:

Schematic & Circuit

![Circuit](Add your circuit diagram here) Add caption explaining connections

![Schematic](Add your schematic diagram here) Add caption explaining the schematic

Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here) List out all components shown

![Build](Add photos of build process here) Explain the build steps

![Final](Add photo of final product here) Explain the final build

Project Demo

Video

[Add your demo video link here] Explain what the video demonstrates

Additional Demos

[Add any extra demo materials/links]

Team Contributions

[Name 1]: [Specific contributions]
[Name 2]: [Specific contributions]
[Name 3]: [Specific contributions]
