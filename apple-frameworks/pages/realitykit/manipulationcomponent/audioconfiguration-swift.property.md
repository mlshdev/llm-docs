> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationcomponent/audioconfiguration-swift.property](https://developer.apple.com/documentation/realitykit/manipulationcomponent/audioconfiguration-swift.property)

# audioConfiguration

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The audio configuration to apply to the object over the course of the interaction.

## Declaration

```swift
var audioConfiguration: ManipulationComponent.AudioConfiguration
```

<a id="discussion"></a>

## Discussion

By default, the system applies standard audio for key moments of the interaction, such as when the interaction begins, a handoff occurs, or the object is released. To apply custom sounds, set the configuration to [none](audioconfiguration-swift.struct/none.md) and apply audio as needed using the various `ManipulationEvents` you can subscribe to in the scene.

## See Also

### Configuring the manipulation

- [configureEntity(\_:hoverEffect:allowedInputTypes:collisionShapes:)](configureentity%28__hovereffect_allowedinputtypes_collisionshapes_%29.md): Apply a default configuration to an entity to enable to it for use with manipulation component.
- [dynamics](dynamics-swift.property.md): The dynamics controlling the object’s movement and behaviors during the interaction.
- [releaseBehavior](releasebehavior-swift.property.md): The behavior to apply to the object’s transform when someone releases it.
