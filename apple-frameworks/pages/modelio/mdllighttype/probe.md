> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllighttype/probe](https://developer.apple.com/documentation/modelio/mdllighttype/probe)

# MDLLightType.probe (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The illumination from the light is determined by texture images representing a sample of a scene at a specific point.

## Declaration

```swift
case probe
```

<a id="Discussion"></a>

## Discussion

This light type is exclusive to the [MDLLightProbe](../mdllightprobe.md) class.

## See Also

### Constants

- [MDLLightType.unknown](unknown.md): The type of the light is unknown or has not been initialized.
- [MDLLightType.ambient](ambient.md): The light source should illuminate a scene evenly regardless of position or direction.
- [MDLLightType.directional](directional.md): The light source illuminates a scene from a uniform direction regardless of its position.
- [MDLLightType.spot](spot.md): The light source illuminates a scene from a specific position and direction.
- [MDLLightType.point](point.md): The light source illuminates a scene in all directions from a specific position.
- [MDLLightType.linear](linear.md): The light source illuminates a scene in all directions from an area in the shape of a line.
- [MDLLightType.discArea](discarea.md): The light source illuminates a scene in all directions from an area in the shape of a disc.
- [MDLLightType.rectangularArea](rectangulararea.md): The light source illuminates a scene in all directions from an area in the shape of a rectangle.
- [MDLLightType.superElliptical](superelliptical.md): The light source illuminates a scene in all directions from an area in the shape of a superellipse.
- [MDLLightType.photometric](photometric.md): The illumination from the light is determined by a photometric profile.
- [MDLLightType.environment](environment.md): The illumination from the light is determined by texture images representing a sample of the surrounding environment for a scene.

# MDLLightTypeProbe (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The illumination from the light is determined by texture images representing a sample of a scene at a specific point.

## Declaration

```objectivec
MDLLightTypeProbe
```

<a id="Discussion"></a>

## Discussion

This light type is exclusive to the [MDLLightProbe](../mdllightprobe.md) class.

## See Also

### Constants

- [MDLLightTypeUnknown](unknown.md): The type of the light is unknown or has not been initialized.
- [MDLLightTypeAmbient](ambient.md): The light source should illuminate a scene evenly regardless of position or direction.
- [MDLLightTypeDirectional](directional.md): The light source illuminates a scene from a uniform direction regardless of its position.
- [MDLLightTypeSpot](spot.md): The light source illuminates a scene from a specific position and direction.
- [MDLLightTypePoint](point.md): The light source illuminates a scene in all directions from a specific position.
- [MDLLightTypeLinear](linear.md): The light source illuminates a scene in all directions from an area in the shape of a line.
- [MDLLightTypeDiscArea](discarea.md): The light source illuminates a scene in all directions from an area in the shape of a disc.
- [MDLLightTypeRectangularArea](rectangulararea.md): The light source illuminates a scene in all directions from an area in the shape of a rectangle.
- [MDLLightTypeSuperElliptical](superelliptical.md): The light source illuminates a scene in all directions from an area in the shape of a superellipse.
- [MDLLightTypePhotometric](photometric.md): The illumination from the light is determined by a photometric profile.
- [MDLLightTypeEnvironment](environment.md): The illumination from the light is determined by texture images representing a sample of the surrounding environment for a scene.
