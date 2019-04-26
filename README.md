# The PeopleSearch Project

I thoroughly enjoyed working on this project and look forward to hearing your feedback.  Below are the details for how you can review my code and run this application.

# Code

The code for this application is here in this GitHub repository (https://github.com/jeffryjegan/people-search) and the people-search-api repository (https://github.com/jeffryjegan/people-search-api).  
The front-end files are in this repository.  The run-time compiled code is in dist/people-search.
The back-end files are in the people-search-api repository.

# Running the Front-end

There are two options for running the Angular front-end.
1. You can clone this repository, navigate to the dist/people-search folder and double-click the index.html file.
2. You can also run the front-end directly by going to https://jeffryjegan.github.io.

# Running the Back-end directly

The back-end can return the people list in both JSON and XML formats.  However, the front-end only uses the JSON format.  Therefore, to see the data in XML format, and otherwise review the back-end web API, go to https://peoplesearchapi2019.azurewebsites.net/api/People?format=XML.

# Testing the Delay
One of the program requirements was to simulate a delay.  To test this, enter in the Search box any text that includes the letter "i".  This will cause a 15 second delay.  During the delay, a "searching..." note will display.  Once the delay is complete, the "searching..." note will disappear and the search results will display.

# Release 2
In release 2 I have added the Google lookup for the name and the Google Map for the address.  Both open in a separate tab.
I have also added a couple of Unit Tests.