> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagebasedlightcomponent](https://developer.apple.com/documentation/realitykit/imagebasedlightcomponent)

# ImageBasedLightComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

## Declaration

```swift
struct ImageBasedLightComponent
```

## Topics

### Initializers

- [init(source:intensityExponent:)](imagebasedlightcomponent/init%28source_intensityexponent_%29.md)

### Instance Properties

- [inheritsRotation](imagebasedlightcomponent/inheritsrotation.md): Whether the IBL inherit the rotation of the Entity
- [intensityExponent](imagebasedlightcomponent/intensityexponent.md): The intensity value of the probe An intensityExponent of 0 means using the diffuse/specular intensities as-is Otherwise the intensity is multiplied by 2^intensityExponent
- [source](imagebasedlightcomponent/source-swift.property.md): Image(s) of the lighting environment

### Enumerations

- [ImageBasedLightComponent.Source](imagebasedlightcomponent/source-swift.enum.md)

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Image-based lights

- [ImageBasedLightComponent.Source](imagebasedlightcomponent/source-swift.enum.md)
- [ImageBasedLightReceiverComponent](imagebasedlightreceivercomponent.md)
