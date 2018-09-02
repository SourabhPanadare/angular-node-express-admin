-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: sanginfo
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applyinfo`
--

DROP TABLE IF EXISTS `applyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applyinfo` (
  `apply_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `applytype` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`apply_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applyinfo`
--

LOCK TABLES `applyinfo` WRITE;
/*!40000 ALTER TABLE `applyinfo` DISABLE KEYS */;
INSERT INTO `applyinfo` VALUES (1,'Sourabh','sou@gmail.com','9845674535','Developer','frontend'),(2,'Abhishek','abhi@gmail.com','5645345678','Developer','ios'),(3,'Ritesh','ritz@gmail.com','9845634523','Developer','frontend'),(4,'Dipankar','dip@gmail.com','9845674534','Developer','android'),(5,'Rohini','roh@gmail.com','8956478965','Developer','backend'),(6,'Sameer','sameer@gmail.com','8975463546','Opensource Developer','backend'),(13,'Riaz','riaz@gmail.com,,,.com','9845368934,98,4536,8934','Developer','ios'),(14,'Ketan','ketan@gmail.com,,,.com','9876543456,98,7654,3456','Developer','android'),(15,'Shailesh','shail@gmail.com,,,.com','9845673425,98,4567,3425','Developer','backend'),(16,'Siddesh','sid@gmail.com,,,.com','8956473567,89,5647,3567','Lead Frontend Developer','frontend');
/*!40000 ALTER TABLE `applyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bannerinfo`
--

DROP TABLE IF EXISTS `bannerinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bannerinfo` (
  `banner_id` int(11) NOT NULL AUTO_INCREMENT,
  `info` varchar(500) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bannerinfo`
--

LOCK TABLES `bannerinfo` WRITE;
/*!40000 ALTER TABLE `bannerinfo` DISABLE KEYS */;
INSERT INTO `bannerinfo` VALUES (1,'We develop applications for smartphones, tablets and desktops with an eye towards a more Mobile tomorrow. We also help you connect these to the social Web. Using time-honed methods and the relevant technology, we ship a quality solution.','banner-1.jpg'),(3,'We build relationships that last long after the solution has been delivered. These relationships start in the conventional customer-supplier domain yet shift seamlessly to a richer partnership founded on trust and veracity.','banner-3.jpg'),(4,'India is home but the World is our playground. Our work happens from our office in Mumbai, India and has been delivered to clients in The US, Singapore, The UK, and The Middle East.','banner-4.jpg'),(6,'We build quality web solutions that have a direct and measurable impact on our customers’ business. We have been doing this successfully for 20 years with passion and integrity.','banner-2.jpg');
/*!40000 ALTER TABLE `bannerinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientinfo`
--

DROP TABLE IF EXISTS `clientinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientinfo` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `head` varchar(500) DEFAULT NULL,
  `para` varchar(500) DEFAULT NULL,
  `clientname` varchar(255) DEFAULT NULL,
  `subhead` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientinfo`
--

LOCK TABLES `clientinfo` WRITE;
/*!40000 ALTER TABLE `clientinfo` DISABLE KEYS */;
INSERT INTO `clientinfo` VALUES (1,'SangInfo has proven themselves again and again to be not just the vendor of a service, but a trusted and reliable partner in keeping our business viable and strong for nearly 10 years! They serve as a model for us of how to provide the best customer service possible.','We have worked with Sanginfo for the development, maintenance, and periodic update of our internal software system for nearly ten years. We rely on this system to help run our business and operate as efficiently as possible.','David Y. Berry','PRESIDENT,VIKING INDUSTRIAL CORPORATION'),(2,'We have done this in record time, with superior quality, and for a fraction of the cost to do it ourselves or outsource domestically.','For Sparks, we have leveraged the SangInfo model to create very sophisticated custom applications that cater to our exhibit businesses.','Brad Kaufman','CHIEF INFORMATION OFFICER, SPARKS EXHIBITS & ENVIRONMENTS'),(3,'','Amazingly, during the course of the project I never spoke to any of the team via phone. We communicated solely through email and instant messaging (and the team members spelling and grammar was better than some of my U.S. based colleagues!) The work was done on-time and on-budget with a very high degree of service.','Bob Cooper','FOUNDER AND CEO, FRONTIER SERVICE DESIGN'),(4,'I thought the communication process would be suspect but it turned out to be quite the opposite as it was quick, clear and concise. You were able to take my comments and ideas and turn them into solutions.','The only hold up in the process was on my end so when we begin our next project I will be sure to be prepared and ready to go as I know your organization is already at that point.Probably the best part with working with you was the willingness to completely redo a design based on my thinking out loud and not making it seem like I thought we were done.Once again, thank you and I look forward to working with you in the future!','Thomas McLaughlin','CEO,CSI WORLDWIDE'),(5,'I was impressed by their professional style and their ability to deliver sophisticated code in rapid fashion with the high level of quality that V-SPAN demands from all our software projects.','V-SPAN hired SangInfo to build several complex custom software components for a Microsoft Outlook interface extension.SangInfo allowed us to quickly ramp up and deliver a critical set of code functionality faster and cheaper then if I had recruited independent local talent. I would highly recommend SangInfo as a software development partner.Once again, thank you and I look forward to working with you in the future!','Ed Wirpsza','SR VP SOFTWARE DEVELOPMENT, V-SPAN INC. (ACQUIRED BY BT)'),(6,'Their speed of work continually amazes me - without fail, they action any request I might make within 24 hours, and often within 12 hours. There are never any errors and the communication with me is always clear.','Sanginfo has looked after our website since the summer of 2006 - first building it and then maintaining and making (regular) changes.Sanginfo has a very knowledgeable team and have advised me on things I have been clueless about. I am very pleased with our working relationship and envisage using them for many years to come.','Lucy Cawkwell','FOUNDER,  OSBORNE CAWKWELL');
/*!40000 ALTER TABLE `clientinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyinfo`
--

DROP TABLE IF EXISTS `companyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyinfo` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `head` varchar(500) DEFAULT NULL,
  `para` varchar(500) DEFAULT NULL,
  `subhead` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyinfo`
--

LOCK TABLES `companyinfo` WRITE;
/*!40000 ALTER TABLE `companyinfo` DISABLE KEYS */;
INSERT INTO `companyinfo` VALUES (1,'Youth brings with it impetuousness, enthusiasm, audacity and energy. Experience steers these elements in the right direction and this combination inevitably leads to successful projects.','We have a rock-solid team with the right blend of experience and youth.','EXPERIENCE + YOUTH'),(2,'While incorporating the core strengths of large software companies in terms of expertise and experience, our compact size and flat layer enables us to respond to customer needs with incomparable agility.','','SMALL IS BEAUTIFUL'),(3,'A home grown mix of rapid prototyping and agile programming make the cut for us. Even before these became buzzwords, we were using them to ensure projects were delivered on time and within budget.','','METHODS THAT WORK'),(4,'Our pursuit of solutions for the toughest problems is charged by curiosity and camaraderie.','Each of us believes that he/she can make a difference. This belief generates a confidence which lets us work productively in adverse situations and take job pressures in our stride','AND... WE MAKE IT HAPPEN');
/*!40000 ALTER TABLE `companyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peopleinfo`
--

DROP TABLE IF EXISTS `peopleinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peopleinfo` (
  `people_id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `peoplename` varchar(255) DEFAULT NULL,
  `details` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`people_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peopleinfo`
--

LOCK TABLES `peopleinfo` WRITE;
/*!40000 ALTER TABLE `peopleinfo` DISABLE KEYS */;
INSERT INTO `peopleinfo` VALUES (1,'mamta.jpg','Mamta Ainapure','The master of all ceremonies and the jack of every SangInfo event. Handles a minimum of 27 independent tasks simultaneously, some of which include programming.'),(2,'swati_hunari.jpg','Swati Hunari','Keeps tabs on the tab. At the helm of anything that is financial, she efficiently ensures all the numbers add up and the only thing that bounces is her yellow smiley softball.'),(3,'amit_kale.jpg','Amit Kale','The tech Jedi torn between coding and movies. A diehard fan of Lord of the Rings, who ‘Striders’ towards perfection and lives to code.'),(4,'riaz_kopti.jpg','Riaz Kopti','Let not the soft spoken and gentle mannerisms fool you. He can cut anyone down to size with his laconic one-liners – a lethal combination of sarcasm and humour. Also known to play evil pranks – not just colleagues, even our customers are unsafe.'),(5,'ketan_sanghvi.jpg','Ketan Sanghvi','Never relenting, always demanding. A healthy dose of mindless TV on the weekend is his weekly recharge'),(6,'siddhesh_bhide.jpg','Siddhesh Bhide','Our very own gentle giant. A nod and a smile is how he acknowledges roses as well as brickbats. Even the most stressful situations are accepted with ease and comfort.'),(7,'shweta_deshmukh.jpg','Shweta Deshmukh','You don’t want to mess with her. But let not looks deceive you. She is mean when it comes to tough bugs, unless it happens to be a spider!'),(8,'sameer_dhulap.jpg','Sameer Dhulap','He doesn’t need to say much (though he does). His facial expressions tell all, be it a software breakthrough or a window pane break-away. He is the savior from complexities and dead-ends in every project.'),(9,'dipankar_patra.jpg','Dipankar Patra','Silent, courteous, committed. What he does not say makes up for what he codes. In another era, he could be the perfect English gentleman.'),(10,'rohini_jindam.jpg','Rohini Jindam','A true artist. Her sketches are incredible: whether they are database diagrams or the neighbours flower patch.'),(11,'pannalal_dubey.jpg','Pannalal Dubey','All questions or problems are immediately entrusted to him. He is the man Friday and has many recipes up his sleeve.'),(12,'ajinkya.jpg','Ajinkya Kondurkar','Quiet, cool and with a perfect Colgate smile. If grinning could be heard, we would have a thunderclap.'),(13,'abhishek_yadav.jpg','Abhishek Yadav','Sportsman, gym enthusiast, foodie, fashion conscious. If only all software developers could be like this!'),(14,'Rishab_viashya.jpg','Rishab Vaishya','Thrives on detail. Every task is followed by an epic summary (in triplicate, if required). He braces up to Riazs constant bullying with dispassionate indifference.'),(15,'aaisha_sanglikar.jpg','Aaisha Sanglikar','Surname Sanglikar, heart Mumbaikar. This is the term applied to all those who truly embody the spirit of this vibrant city. A mixed bag, she quietly expresses boredom and then attacks her tasks with a determined vengeance.'),(16,'shailesh_saindane.jpg','Shailesh Saindane','Talks a lot, works a lot, asks a lot, achieves a lot. He is a huge carton of everything. He is also very attached to his collection of jersey shirts.');
/*!40000 ALTER TABLE `peopleinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sanginfo'
--

--
-- Dumping routines for database 'sanginfo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-27 11:58:01
