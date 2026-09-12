> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/surroundingslight](https://developer.apple.com/documentation/realitykit/spotlightcomponent/surroundingslight)

# SpotLightComponent.SurroundingsLight

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS 27.0+

A component that specifies that the spot light illuminates the physical and immersive environment.

## Declaration

```swift
struct SurroundingsLight
```

<a id="Performance-Considerations"></a>

## Performance Considerations

Set [attenuationRadius](attenuationradius.md) deliberately on lights that use this component. Its default is often larger than needed, and the resulting on-screen footprint is the dominant driver of this effect’s cost.

The cost depends on how many pixels receive this effect, which is why attenuation radius and outer angle are important.  There is also a cost for each light that is in each pixel.

Excessive use of this effect may contribute to user-noticeable frame drops and can cause the device to heat up in graphically demanding situations. Monitor the thermal state and reduce usage as a mitigation, if necessary. Apps can monitor thermal state changes by subscribing to the [thermalStateDidChange](../../foundation/notificationcenter/messageidentifier/thermalstatedidchange.md) notification.

To stay responsive to the device’s available thermal headroom, read [thermalState](../../foundation/processinfo/thermalstate-swift.property.md) and observe [thermalStateDidChange](../../foundation/notificationcenter/messageidentifier/thermalstatedidchange.md) to react when it changes. As the reported state moves from `.fair` toward `.serious` and `.critical`, reduce the attenuation radius or outer angle, or remove this component from lights where the effect is not essential.

## Topics

### Initializers

- [init()](surroundingslight/init%28%29.md): Creates a surroundings light component.

## Relationships

### Conforms To

- [Component](../component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Defining the light contribution

- [SpotLightComponent.ProjectiveTexture](projectivetexture.md): A component that specifies a map of a projective texture or cookie light to use for shadow mapping.
