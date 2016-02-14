
/* EDIT THIS Document so that it only contains the four objects
see link: https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-1952638584

*/
//problem set 1 addition




var bio = {
    "name": "Enrique Cahua",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-888-3962",
        "email": "enriquecahua@outlook.com",
        "github": "enriquecahua",
        "twitter": "@enriquecahua",
        "location": "South California"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
    "bioPic": "images/fry.jpg"

}
var education = {
    "schools": [
        {
            "name": "Miami Dade College",
            "city": "Miami",
            "majors": ["Finance"],
            "dates": 2009,
            "url": "http://www.mdc.edu"
        },
        {
            "name": "Rutgers University",
            "city": "Newark",
            "majors": ["CS"],
            "dates": 2011,
            "url": "http://www.rutgers.edu"
        }
    ],
    "onlineCourses": [

        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": 2015
        },

        {
            "title": "Front End Web Developer",
            "school": "Free Code Camp",
            "dates": 2015

        }
    ]
}



var work = {
    "jobs": [
        {
            "employer": "Amazon",
            "title": "Data Analyst",
            "dates": "September 2014 - current",
            "description": "WHo moved my cheesy cheese"
    },
        {
            "employer": "LA Fitness",
            "title": "Sales Person",
            "dates": "September 2014",
            "description": "sales stuff"
    }
        ]
}

var projects = {
    "projects": [

        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Who moved my cheese",
            "images": [
        "url.com", "url2.com"

            ]
        }
    ]
}



if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HMTLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);

}

document.getElementById("education").style.backgroundColor = "black";

formattedName = HTMLheaderName.replace('%data%', ' Enrique Cahua');

formattedRole = HTMLheaderRole.replace('%data%', ' Web Developer');

$('#header').prepend(formattedRole);

$('#header').prepend(formattedName);

