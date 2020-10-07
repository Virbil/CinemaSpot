# CinemaSpot

README
This is a movie search app made in VS Code using JavaScript, HTML, and CSS.
This app will utilize an API from http://www.omdbapi.com/
Install the Live Server Extension once VS Code is open.
View > Extension (or Ctrl+Shift+X)

The minimal styling was used from W3 found here: https://www.w3docs.com/learn-html/html-layout-templates.html.

The simple process flow:
	01. Land on home.html
	02. Enter a movie title or keyword
	03. The API will be called and will return any movie with that title or keyword in the name
		The API endpoint is: http://www.omdbapi.com/?apikey=[mykey]&t=[movie]
	04. The user will automatically be routed to search.html where they are presented with options of movies based on their search.
	05. Clicking on a movie poster will direct the user to the final moviedetails.html page.
	06. Further details of the movie will be displayed calling a second API.
		The API endpoint is: http://www.omdbapi.com/?apikey=[mykey]&s=[movie]
