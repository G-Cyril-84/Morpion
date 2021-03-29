let tab=[];         // C'est notre tableau qui stocke le morpion
let tourActuel=1;         // C'est notre compteur de tour, la variable commence à 1 par défaut
let joueur=1;       // C'est le joueur actuel pendant ce tour (par défaut, joueur 1), la variable alterne entre 1 et 2
let pion="X";       // C'est le pion du joueur (par défaut, pion X pour joueur 1), la variable alterne entre X et O
let coup;           // C'est le coup joué, la variable stocke la position pour accéder au tableau
let fin=false;      // C'est la condition de fin de la boucle du jeu, si une condition de victoire est trouvé, la variable devient vraie
let x;

// On remplit le tableau de 1 à 9, ces valeurs serviront à afficher les positions à cibler dans la grille
for (let i=0; i<=8; i++) {
    tab[i] = i+1;
}

// On crée la fonction victoire(), elle a pour but de vérifier chaque condition de victoire et si 1 est vrai, alors on termine le jeu
function victoire() {
    // Conditions de victoire : Colonnes 1 à 3
    if (((tab[0]=="X")&&(tab[1]=="X")&&(tab[2]=="X")) || ((tab[0]=="O")&&(tab[1]=="O")&&(tab[2]=="O")) ||
    ((tab[3]=="X")&&(tab[4]=="X")&&(tab[5]=="X")) || ((tab[3]=="O")&&(tab[4]=="O")&&(tab[5]=="O")) ||
    ((tab[6]=="X")&&(tab[7]=="X")&&(tab[8]=="X")) || ((tab[6]=="O")&&(tab[7]=="O")&&(tab[8]=="O")) ||
    // Conditions de victoire : Lignes 1 à 3
    ((tab[0]=="X")&&(tab[3]=="X")&&(tab[6]=="X")) || ((tab[0]=="O")&&(tab[3]=="O")&&(tab[6]=="O")) ||
    ((tab[1]=="X")&&(tab[4]=="X")&&(tab[7]=="X")) || ((tab[1]=="O")&&(tab[4]=="O")&&(tab[7]=="O")) ||
    ((tab[2]=="X")&&(tab[5]=="X")&&(tab[8]=="X")) || ((tab[2]=="O")&&(tab[5]=="O")&&(tab[8]=="O")) ||
    // Conditions de victoire : Diagonales 1 à 2
    ((tab[0]=="X")&&(tab[4]=="X")&&(tab[8]=="X")) || ((tab[0]=="O")&&(tab[4]=="O")&&(tab[8]=="O")) ||
    ((tab[2]=="X")&&(tab[4]=="X")&&(tab[6]=="X")) || ((tab[2]=="O")&&(tab[4]=="O")&&(tab[6]=="O"))) {
        //  Instructions en cas de victoire, fin devient vraie pour arrêter le programme, on affiche un message de fin et la grille gagnante
        fin = true;
        console.log(`Joueur ${joueur} a gagné au tour ${tourActuel} !`);
        // document.getElementById("affichage").innerHTML = ``;
        // document.getElementById("com").innerHTML = `Victoire du joueur ${joueur} (pion ${pion}) en ${tourActuel} tours !`;
        document.getElementById("affichage").innerHTML = `Victoire du joueur ${joueur} (pion ${pion}) en ${tourActuel} tours !`;
        document.getElementById("com").innerHTML = "<button id='replay' onclick='location.reload()'>Rejouer</button>";
    } else {
        // Instructions si pas de victoire, on passe au tour suivant, on change de joueur et de pion
        tourActuel++;
        if (joueur==1) {
            joueur++;
            pion="O";
        } else {
            joueur--;
            pion="X";
        }
        if(tourActuel <= 9) {
            document.getElementById("affichage").innerHTML = `Tour ${tourActuel} : Joueur ${joueur} (Pion ${pion})`;
            document.getElementById("com").innerHTML = `Cliquez pour placer votre pion`;
        } else {
            // document.getElementById("affichage").innerHTML = `Tour 9 : Joueur 1 (Pion X)`;
            // document.getElementById("com").innerHTML = `Match nul`;
            document.getElementById("affichage").innerHTML = `Match nul`;
            document.getElementById("com").innerHTML = "<button id='replay' onclick='location.reload()'>Rejouer</button>";
        }
    }
}

function tour(pos) {
    if ((tourActuel > 9) || (fin==true)) {
    } else {
        if ((tab[pos-1]=="X")||(tab[pos-1]=="O")) {
            document.getElementById("com").innerHTML = `Coup invalide, position déjà jouée`;
        } else {
            switch (pos) {
                case 1:
                x = document.getElementById("b2")
                break;
                case 2:
                x = document.getElementById("b4")
                break;
                case 3:
                x = document.getElementById("b6")
                break;
                case 4:
                x = document.getElementById("d2")
                break;
                case 5:
                x = document.getElementById("d4")
                break;
                case 6:
                x = document.getElementById("d6")
                break;
                case 7:
                x = document.getElementById("f2")
                break;
                case 8:
                x = document.getElementById("f4")
                break;
                case 9:
                x = document.getElementById("f6")
                break;
            }

            if (joueur==1) {
                tab[pos-1]="X";
                x.style.backgroundImage = "url('pics/PionX.png')";
            } else {
                tab[pos-1]="O";
                x.style.backgroundImage = "url('pics/PionO.png')";
            }

            victoire()
        }
    }
}