Arena = function(game) //on créée notre objet Arena qui prend l'objet game en argument
{
    // VARIABLES UTILES
    this.game = game;
    var scene = game.scene;


    //EXEMPLE 
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    var cube = BABYLON.Mesh.CreateBox("cube", 10, scene, false);

    cube.position.y = 1;

    this.game.scene.cube = cube;// va nous permettre d'accéder à notre mesh pour réaliser des animations au sein du prototype 
    //(à faire à chaque fois que vous comptez animer un mesh)

    var boxArena = BABYLON.Mesh.CreateBox("box1", 100, scene, false, BABYLON.Mesh.BACKSIDE);

    boxArena.scaling.y = 2;

    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);

    boxArena.material = materialGround;

    //LIRE LA DOC

    // LUMIERES 

    /*TODO :  -3 lumières différentes
              -couleurs et intensités
    */

    // MATERIAUX ET TEXTURES

    /*TODO :    -materiau standard
                -multi-materiaux
                -video-texture
                -normal map
                -texture procedurale (feu, nuage...)
    */

    //MESHS ET COLLISIONS

    /*TODO :    -box
                -sphere
                -cylindre
                -tore
                -appliquer les collisions
    */

  

    //AUDIO

    /*TODO : -sons d'ambiance
              -sons liés à des objets --> le son doit être localisé spatialement
    */
    
    //SKYBOX

    /*TODO : -Créer une (grande) box
             -Un materiau avec une CubeTexture, attention à bien faire correspodre les faces.
    */
};

Arena.prototype={

    //ANIMATION
    _animateWorld : function(ratioFps)
    {
      // Animation des plateformes (translation, rotation, redimensionnement ...)
      /*TODO*/
    },
}