> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlarealight/aspect](https://developer.apple.com/documentation/modelio/mdlarealight/aspect)

# aspect (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The aspect ratio of the light’s shape.

## Declaration

```swift
var aspect: Float { get set }
```

<a id="Discussion"></a>

## Discussion

If the light’s type is [MDLLightType.discArea](../mdllighttype/discarea.md),  [MDLLightType.rectangularArea](../mdllighttype/rectangulararea.md), or [MDLLightType.superElliptical](../mdllighttype/superelliptical.md), this property determines the lengths of the shape’s major and minor axes (longer and shorter dimensions) relative to the [areaRadius](arearadius.md) property’s value.

## See Also

### Managing a Light’s Shape

- [areaRadius](arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [superEllipticPower](superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

# aspect (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The aspect ratio of the light’s shape.

## Declaration

```objectivec
@property (nonatomic, readwrite) float aspect;
```

<a id="Discussion"></a>

## Discussion

If the light’s type is [MDLLightTypeDiscArea](../mdllighttype/discarea.md),  [MDLLightTypeRectangularArea](../mdllighttype/rectangulararea.md), or [MDLLightTypeSuperElliptical](../mdllighttype/superelliptical.md), this property determines the lengths of the shape’s major and minor axes (longer and shorter dimensions) relative to the [areaRadius](arearadius.md) property’s value.

## See Also

### Managing a Light’s Shape

- [areaRadius](arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [superEllipticPower](superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.
