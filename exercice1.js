        
        function verif(){
         
         
        const userInput = document.getElementById("textBox1").value;
        
            if (userInput!=nombreMagique){

                
                if (userInput > nombreMagique){
                    alert("Trop grand! ");
                }

                else {
                    alert("Trop petit! ");
            }}

            else {
                    alert("Félicitations ! Vous avez trouvé le nombre magique !");
                    
                    
            }
                    }
   