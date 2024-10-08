
        
        
        document.getElementById("button1").addEventListener("click", verif())
        function verif(){
         
         const nombreMagique = Math.floor(Math.random() * 100) + 1;
        console.log(nombreMagique);
        const userInput = document.getElementById("textBox1").value;
        
            // Vérifier si la saisie est un nombre valide
            
                
                if (userInput > nombreMagique){
                    alert("Trop grand! ");
                }

                else if( userInput <nombreMagique){
                    alert("Trop petit! ");
            }

                else {
                    alert("Félicitations ! Vous avez trouvé le nombre magique !")
                
            }}
   