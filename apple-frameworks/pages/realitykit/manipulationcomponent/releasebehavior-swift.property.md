> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationcomponent/releasebehavior-swift.property](https://developer.apple.com/documentation/realitykit/manipulationcomponent/releasebehavior-swift.property)

# releaseBehavior

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The behavior to apply to the object’s transform when someone releases it.

## Declaration

```swift
var releaseBehavior: ManipulationComponent.ReleaseBehavior
```

<a id="discussion"></a>

## Discussion

By default, the `releaseBehavior` is [reset](releasebehavior-swift.struct/reset.md), which animates the object to its initial pose relative to its parent.

## See Also

### Configuring the manipulation

- [configureEntity(\_:hoverEffect:allowedInputTypes:collisionShapes:)](configureentity%28__hovereffect_allowedinputtypes_collisionshapes_%29.md): Apply a default configuration to an entity to enable to it for use with manipulation component.
- [audioConfiguration](audioconfiguration-swift.property.md): The audio configuration to apply to the object over the course of the interaction.
- [dynamics](dynamics-swift.property.md): The dynamics controlling the object’s movement and behaviors during the interaction.
