# Automated Email Sender

## Description
Email sender app for Fabric Monde. It enables you to send the email to thousands of email-ids at one click. It is developed using Javascript technologies such as 
ElectronJs, ExpressJs and also Amazon SES api to send mails, HTML for front-end.

## Installation
To Install the FM Sender App on your device follow the steps below and make sure you have active internet connection.

#### Step1 : Clone the App from Custom-Server branch
        Go to the location in your pc where you want to clone the app and open terminal at that location,
        Run Command git romte add origin <url>.
        then Run git pull origin custom-server.

#### Step2 : Set your App to Use
        Move into App folder open terminal over there and run npm install,
        then move to express-app folder and run npm install,
        after that move to folder spreadsheet and run npm install.
            
## Usage 
To use the app to send Emails folow the steps below.

#### Step1 : Run the App
        To Run the app go to the app location and open terminal over there,
        on terminal at the app location run command npm start to start the app.
        After that you will see a terminal will opened automatically that terminal is to fetch the sheets from Google Spreadsheet,
        this terminal will automatically be closed after the fetching of all sheets.

#### Step2 : Start Server
        You will see a UI on the screen which have three optoin as Server1, Server2 and Server3.
        Server1 is to start app at port 3001,Server2 is to start app at port 3002 and Server3 is to start app at port 3003.
        Once you click on any above Option in UI the server will start on respective port and UI window for that server poped up there.
        
#### Step3 : Set the App UI to send mails
         On UI there will be a form to set your Email. 
        1) Select the Client type to send the mails to particular type of Group.
        2) Set the Dummy Email-id to send the first mail as dummy on that Email-id.
        3) Set the Subject for the Email(to attach the name of company dynamically in subject,
           add keyword 'company_name' at that place and that keyword will be replaced by actual comapny name on run time)
        4) Select the HTML content from your pc which you want to send as the Email.
        5) Click on Send Button.
        6) Dummy mail will be sent to Dummy Email-id, you can check the Email in your Dummy email box.
        7) Set the limit for emails you want to sent at one click.
        8) Click on confirm and send button to send the mails to your selected group.
