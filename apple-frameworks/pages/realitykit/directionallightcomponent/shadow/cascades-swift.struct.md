> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/cascades-swift.struct](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/cascades-swift.struct)

# DirectionalLightComponent.Shadow.Cascades

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct Cascades
```

## Topics

### Creating cascades

- [fixed(\_:bias:)](cascades-swift.struct/fixed%28__bias_%29.md): Specify a fixed number of shadow cascades to use.

### Type Properties

- [automatic](cascades-swift.struct/automatic.md): Allow the engine to determine the optimal number of shadow cascades to use – depending on the scene and camera configuration in any given frame.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring shadow cascades

- [cascades](cascades-swift.property.md): Number of shadow cascades to use when rendering shadows for this light.
