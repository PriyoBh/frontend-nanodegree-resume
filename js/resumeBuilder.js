var loadResume = (function(){

/*The init function initializes all json objects and defines the private functions to add 
html elements to the DOM. The private functions are exposed via public functions which are 
called from the main module.
*/
	var init = (function(){

//bio object which encapsulates all the bio details

			var bio = {

				myName: "Priyabrata",
				role: "Front-end Developer",
				welcomeMessage: "Welcome to my site",
				contacts: {
								mobile: "+61406809771",
								emailAddress: "mithun21@gmail.com",
								github: "priyobh",
								twitter: "@priyobh",
								location: "Sydney, Australia"
							},

				pictureURL : "images/me.png",
				skills: ["HTML","CSS","JS","Java"],

//private function which adds the bio details to the header

				display: function(){

					var formattedName, formattedRole,formattedMessage,formattedMobile,formattedEmail;
					var formattedGithub,formattedTwitter,formattedLocation,formattedPic;

					formattedRole = HTMLheaderRole.replace("%data%",this.role);
					$("#header").prepend(formattedRole);

					formattedName = HTMLheaderName.replace("%data%",this.myName);
					$("#header").prepend(formattedName);
					
					formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
					$("#topContacts").append(formattedMobile);					

					formattedEmail = HTMLemail.replace("%data%",this.contacts.emailAddress);					
					$("#topContacts").append(formattedEmail);					

					formattedTwitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
					$("#topContacts").append(formattedTwitter);					

					formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
					$("#topContacts").append(formattedGithub);					

					formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
					$("#topContacts").append(formattedLocation);										


					formattedMessage = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
					$("#header").append(formattedMessage);					

					formattedPic = HTMLbioPic.replace("%data%",this.pictureURL);
					$("#header").append(formattedPic);										

					if (this.skills.length > 0){

					$("#header").append(HTMLskillsStart);

					var formattedSkill;
					for (var i=0; i<this.skills.length; i++)
					{
						formattedSkill = HTMLskills.replace("%data%",this.skills[i]);
						$("#skillsH3").append(formattedSkill);
					}

				}
			}
		};

//work object which encapsulates all the work related information

			var work = {

				jobs: [							
						{	position: "Senior Software Test Engineer",
							employer : "Fujitsu Australia Software Technology",
							yearsWorked: "Oct2014-till date",
							cityOfBusiness: "Sydney",
							responsibilities : "Build test automation frameworks, design test cases, maintain test environment"
						},
						{	position: "Test Automation Engineer",
							employer : "JP Morgan and Chase",
							yearsWorked: "April 2014-Sept 2014",
							cityOfBusiness: "Sydney",
							responsibilities : "Build test automation frameworks, design test cases, maintain test environment"

						},
						{
							position: "Senior Software Test Engineer",
							employer : "Fujitsu Australia Software Technology",
							yearsWorked: "March 2013-Jan 2014",
							cityOfBusiness: "Sydney",
							responsibilities : "Build test automation frameworks, design test cases, maintain test environment"
						},
						{
							position: "Test Lead",
							employer : "Commonwealth Bank",
							yearsWorked: "Aug 2012 - March 2013",
							cityOfBusiness: "Sydney",
							responsibilities : "Build test automation frameworks, design test cases, maintain test environment"
						},
						{
							position: "Test Engineer",
							employer : "First Title Insurance",
							yearsWorked: "May 2012 - Aug 2012",
							cityOfBusiness: "Sydney",
							responsibilities : "Build test automation frameworks, design test cases, maintain test environment"
						}

					],			

//private function which adds the job details to the body

				display: function(){

					if (this.jobs.length > 0){

					var formattedEmployer, formattedTitle,formattedLocation,formattedYearsWorked, formattedDescription;

					for (job in this.jobs){

					$("#workExperience").append(HTMLworkStart);
					formattedEmployer = HTMLworkEmployer.replace("%data%",this.jobs[job].employer);

					formattedTitle = HTMLworkTitle.replace("%data%",this.jobs[job].position);
					$(".work-entry:last").append(formattedEmployer + formattedTitle);

					formattedLocation = HTMLworkLocation.replace("%data%",this.jobs[job].cityOfBusiness);
					$(".work-entry:last").append(formattedLocation);

					formattedYearsWorked = HTMLworkDates.replace("%data%",this.jobs[job].yearsWorked);
					$(".work-entry:last").append(formattedYearsWorked);

					formattedDescription = HTMLworkDescription.replace("%data%",this.jobs[job].responsibilities);
					$(".work-entry:last").append(formattedDescription);

				}
			}
		}	

	};

//education object which encapsulates all the education details

			var education = {

				schools: [
							{
								name: "Florida Institute of Technology",
								location: "Melbourne, Florida",
								degree: "Masters",
								majors: ["Computer Science"],
								datesAttended: 2005,
								url: "www.fit.edu"

							},
							{
								name: "M.S. Rmaiah Institute of Technology",
								location: "Bangalore, India",
								degree: "Bachelors",
								majors: ["Information Sciences"],
								datesAttended: 2003,
								url: "www.msrit.edu"

							}
						],
				onlineCourses: [
									{
										title: "Front-end developer",
										school: "Udacity",
										dates: 2016,
										url: "www.udacity.com"

									}
									
								],

//private function to add all the education details to the body

				display: function(){

					var formattedName, formattedLocation, formattedDegree,formattedDatesAttended,formattedURL;
					var formattedMajors;

					if (this.schools.length > 0){

						for (schoolItem in this.schools){

							$("#education").append(HTMLschoolStart);
							formattedName = HTMLschoolName.replace("%data%",this.schools[schoolItem].name);
							formattedDegree = HTMLschoolDegree.replace("%data%",this.schools[schoolItem].degree);
							$(".education-entry:last").append(formattedName + formattedDegree);							
							formattedLocation = HTMLschoolLocation.replace("%data%",this.schools[schoolItem].location);
							$(".education-entry:last").append(formattedLocation);
							formattedDatesAttended = HTMLschoolDates.replace("%data%",this.schools[schoolItem].datesAttended);
							$(".education-entry:last").append(formattedDatesAttended);
							formattedMajors = HTMLschoolMajor.replace("%data%",this.schools[schoolItem].majors.toString());
							$(".education-entry:last").append(formattedMajors);

						}

					var formattedTitle, formattedSchool, formattedDates, formattedOnlineURL;
					
					if (this.onlineCourses.length > 0){

						for (courseItem in this.onlineCourses){
							$("#education").append(HTMLonlineClasses);
							$("#education").append(HTMLonlineClassStart);
							formattedTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[courseItem].title);
							formattedSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[courseItem].school);
							$(".education-entry:last").append(formattedTitle + formattedSchool);
							formattedDates = HTMLonlineDates.replace("%data%",this.onlineCourses[courseItem].dates);
							$(".education-entry:last").append(formattedDates);
							formattedOnlineURL = HTMLonlineURL.replace("%data%",this.onlineCourses[courseItem].url);
							$(".education-entry:last").append(formattedOnlineURL);

						}
					}	

				}

			}
				
		};

			var project = {

				projects: [
								{
									title: "myStore",
									datesWorked: "Oct2014 - till date",
									description: "enterprise web application",
									pics: ["images/i1.png"]
								},
								{
									title: "custodian management",
									datesWorked: "Apr 2014 - Sept 2014",
									description: "a Java Spring application which reads incoming files and writes data",
									pics: ["images/i2.png"]
								},
								{
									title: "myStore",
									datesWorked: "Mar 2013 - Feb 2014",
									description: "Upgrade of Investment Management Database from Sybase 12 to 15",
									pics: ["images/i3.png","images/i4.png"]
									
								}
							],
					display: function(){

						if (this.projects.length > 0){

							var formattedTitle, formattedDatesWorked, formattedDescription,formattedProjectImage ;

							for (projectItem in this.projects){
								
								$("#projects").append(HTMLprojectStart);
								formattedTitle = HTMLprojectTitle.replace("%data%",this.projects[projectItem].title);
								$(".project-entry:last").append(formattedTitle);
								formattedDatesWorked = HTMLprojectDates.replace("%data%",this.projects[projectItem].datesWorked);
								$(".project-entry:last").append(formattedDatesWorked);
								formattedDescription = HTMLprojectDescription.replace("%data%",this.projects[projectItem].description);
								$(".project-entry:last").append(formattedDescription);

								for (picItem in this.projects[projectItem].pics){
									formattedProjectImage = HTMLprojectImage.replace("%data%",this.projects[projectItem].pics[picItem]);
									$(".project-entry:last").append(formattedProjectImage);									
								}

							}
						}

					}
								
				};


			return {

				showBio:function(){
					bio.display();
				},
				
				showWork: function(){
					work.display();
				},

				showProject: function(){
					project.display();
				},

				showEducation: function(){
					education.display();
				},		

//returns an array of all the locations where I have lived and worked

  				locationFinder: function(){
    			
    				var locations = [];				
					locations.push(bio.contacts.location);    			
    				for (var school in education.schools) {      			
      					locations.push(education.schools[school].location);
    				}    			
    
    				for (var job in work.jobs) {
      					locations.push(work.jobs[job].location);
    				}

    				return locations;
  				
  				}	

			};			

	})();
	
//calls the logClicks function in helper.js to count all the clicks on the page

	$(document).click(function(loc){
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x,y);
	});

	init.showBio();

	init.showWork();

	init.showProject();

	init.showEducation();

	var map;    
	
	function initializeMap() {

	  var locations;
	  locations = init.locationFinder();
	  var mapOptions = {
	    disableDefaultUI: true
	  };
 
  	map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  
  	function createMapMarker(placeData) {
	    
	    var lat = placeData.geometry.location.lat(); 
	    var lon = placeData.geometry.location.lng();  
	    var name = placeData.formatted_address;   
	    var bounds = window.mapBounds;            
    
    	var marker = new google.maps.Marker({

	     map: map,
	     position: placeData.geometry.location,
	     title: name

    	});
    
    	var infoWindow = new google.maps.InfoWindow({
      	content: name
    	});
   
    	google.maps.event.addListener(marker, 'click', function() {
      
    	});
    
    	bounds.extend(new google.maps.LatLng(lat, lon));
    	map.fitBounds(bounds);    
    	map.setCenter(bounds.getCenter());
  	}

  
	function callback(results, status) {
    	if (status == google.maps.places.PlacesServiceStatus.OK) {
      		createMapMarker(results[0]);
    	}
	}

	function pinPoster(locations) {
    
    	var service = new google.maps.places.PlacesService(map);
    	for (var place in locations) {

     		if (!locations[place])
     		continue;
      		var request = {
        	query: locations[place]
      	};      	    
      	service.textSearch(request, callback);

    }
  }
  
  		window.mapBounds = new google.maps.LatLngBounds();
   		pinPoster(locations);
}

	window.addEventListener('load', initializeMap);
	window.addEventListener('resize', function(e) {  
  		map.fitBounds(mapBounds);
});
	
	$("#mapDiv").append(googleMap);

}());











