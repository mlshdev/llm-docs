> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllighttype](https://developer.apple.com/documentation/modelio/mdllighttype)

# MDLLightType (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.

## Declaration

```swift
enum MDLLightType
```

## Topics

### Constants

- [MDLLightType.unknown](mdllighttype/unknown.md): The type of the light is unknown or has not been initialized.
- [MDLLightType.ambient](mdllighttype/ambient.md): The light source should illuminate a scene evenly regardless of position or direction.
- [MDLLightType.directional](mdllighttype/directional.md): The light source illuminates a scene from a uniform direction regardless of its position.
- [MDLLightType.spot](mdllighttype/spot.md): The light source illuminates a scene from a specific position and direction.
- [MDLLightType.point](mdllighttype/point.md): The light source illuminates a scene in all directions from a specific position.
- [MDLLightType.linear](mdllighttype/linear.md): The light source illuminates a scene in all directions from an area in the shape of a line.
- [MDLLightType.discArea](mdllighttype/discarea.md): The light source illuminates a scene in all directions from an area in the shape of a disc.
- [MDLLightType.rectangularArea](mdllighttype/rectangulararea.md): The light source illuminates a scene in all directions from an area in the shape of a rectangle.
- [MDLLightType.superElliptical](mdllighttype/superelliptical.md): The light source illuminates a scene in all directions from an area in the shape of a superellipse.
- [MDLLightType.photometric](mdllighttype/photometric.md): The illumination from the light is determined by a photometric profile.
- [MDLLightType.probe](mdllighttype/probe.md): The illumination from the light is determined by texture images representing a sample of a scene at a specific point.
- [MDLLightType.environment](mdllighttype/environment.md): The illumination from the light is determined by texture images representing a sample of the surrounding environment for a scene.

### Initializers

- [init(rawValue:)](mdllighttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MDLLightType (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.

## Declaration

```objectivec
enum MDLLightType : NSUInteger;
```

## Topics

### Constants

- [MDLLightTypeUnknown](mdllighttype/unknown.md): The type of the light is unknown or has not been initialized.
- [MDLLightTypeAmbient](mdllighttype/ambient.md): The light source should illuminate a scene evenly regardless of position or direction.
- [MDLLightTypeDirectional](mdllighttype/directional.md): The light source illuminates a scene from a uniform direction regardless of its position.
- [MDLLightTypeSpot](mdllighttype/spot.md): The light source illuminates a scene from a specific position and direction.
- [MDLLightTypePoint](mdllighttype/point.md): The light source illuminates a scene in all directions from a specific position.
- [MDLLightTypeLinear](mdllighttype/linear.md): The light source illuminates a scene in all directions from an area in the shape of a line.
- [MDLLightTypeDiscArea](mdllighttype/discarea.md): The light source illuminates a scene in all directions from an area in the shape of a disc.
- [MDLLightTypeRectangularArea](mdllighttype/rectangulararea.md): The light source illuminates a scene in all directions from an area in the shape of a rectangle.
- [MDLLightTypeSuperElliptical](mdllighttype/superelliptical.md): The light source illuminates a scene in all directions from an area in the shape of a superellipse.
- [MDLLightTypePhotometric](mdllighttype/photometric.md): The illumination from the light is determined by a photometric profile.
- [MDLLightTypeProbe](mdllighttype/probe.md): The illumination from the light is determined by texture images representing a sample of a scene at a specific point.
- [MDLLightTypeEnvironment](mdllighttype/environment.md): The illumination from the light is determined by texture images representing a sample of the surrounding environment for a scene.
