> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/physicsorigin](https://developer.apple.com/documentation/realitykit/arview/physicsorigin)

# physicsOrigin

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

The entity that defines the origin of the scene’s physics simulation.

## Declaration

```swift
@MainActor @preconcurrency var physicsOrigin: Entity? { get set }
```

## Mentioned In

- [Designing scene hierarchies for efficient physics simulation](../designing-scene-hierarchies-for-efficient-physics-simulation.md)

<a id="discussion"></a>

## Discussion

By default, the scene’s origin acts as the origin for physics calculations. Set the [physicsOrigin](physicsorigin.md) to choose a particular entity within the scene to act as the origin instead.

Here are the steps to do that:

1. Add a new entity to the scene that tracks the ARKit anchor position.
2. Set `physicsOrigin` to the entity to indicate that this entity’s transform determines the origin of the physics simulation.
3. Optionally, parent the Jenga blocks to the anchor entity. This way the Jenga blocks update automatically when the anchor position changes.

Example:

```swift
// Define your anchor entity and add it to the scene.
let myAnchor = AnchorEntity(.image(group: "References", name: "GameImage"))
scene.addAnchor(myAnchor)

// Set myAnchor as the origin of the physics simulation.
arView.physicsOrigin = myAnchor

// Add the simulated blocks to the anchor.
myAnchor.addChild(block0)
myAnchor.addChild(block1)

// ...
```

Using this setup, RealityKit simulates all forces, velocities, etc. relative to `myAnchor`. Moving the anchor will not affect the simulation.

For more information, see [Handling different-sized objects in physics simulations](../handling-different-sized-objects-in-physics-simulations.md).

## See Also

### Providing environmental context

- [environment](environment-swift.property.md): The view’s background, lighting, and acoustic properties.
- [audioListener](audiolistener.md): The entity that defines the listener position and orientation for spatial audio.
