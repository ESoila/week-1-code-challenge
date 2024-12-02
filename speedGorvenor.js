//. Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

 //. > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 function speedGauge(speed){

    const speedLimit = 70;
    
    
    

    if (speed >=0 && speed <=70){
        return 'ok'

     
}else if ( speed ==80){
        return '2 demerit_points' 
    
}else if (speed ==90 && speed <=99){
       return '4_demerit_points'
            

}else if (speed ==100 && speed <=109){
    return '6_demerit_points'
    
}else if (speed ==110 && speed <=119){
    return '8_demerit_points'

  }else if (speed ==120 && speed <=129){
    return '10_demerit_points'

   }else if (speed >=130 ){
      return 'license_Suspended'

        

   }


    } 

    
  
    
  
   
   console.log (speedGauge(110))   
   
      
     