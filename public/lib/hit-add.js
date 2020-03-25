AFRAME.registerComponent('hit-add', {
  init: function() {
    var scene = AFRAME.scenes[0];
    var newObject = function(data) {
      var entity = data.detail;

      entity.setAttribute("geometry", {
        primitive: "box",
        width: 0.1,
        height: 0.1,
        depth: 0.1
      });

      entity.setAttribute("material", {
        shader: "standard",
        transparent: true,
        opacity: 0.45,
        fog: false,
        color: "#ffcc00"
      });

      scene.appendChild(entity);
      };
    
    scene.addEventListener("newAnchoredEntity", newObject);

  }
});
