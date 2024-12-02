//.Challenge 3: Net Salary Calculator (Toy Problem)

//.Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//.NB: Use KRA, NHIF, and NSSF values provided in the link below.


let grossSalary=150000


shif =2.75/100*grossSalary
nssf = 2160





function calculatePayee(grossSalary) {
    if (grossSalary <= 24000) {
      return 10/100 * grossSalary; 
    } else if (grossSalary >= 24001 && grossSalary <= 32333) {
      return 25/100 * grossSalary; 
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
      return 30/100 * grossSalary; 
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
      return 32.5/100 * grossSalary; 
    } else if (grossSalary >= 800001 && grossSalary <= 9600000) {
      return 35/100 * grossSalary; 
    } else {
      return 0; 
    }

    
        function netsalary(grossSalary, payee, shif, nssf) {
            
            let netsalary = grossSalary - (payee + shif + nssf);
            return netsalary; 
          }

          function shif(Deductions) {
            
            let shif= 2.5/100*grossSalary;
            return shif; 
          }

          function nssf(Deductions) {
            
            let nssf= 2160;
            return nssf; 
          }
    }
  
  
  
  
  





console.log(calculatePayee(150000))
console.log(shif)
console.log(nssf)

