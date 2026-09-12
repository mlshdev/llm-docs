> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlarealight/superellipticpower](https://developer.apple.com/documentation/modelio/mdlarealight/superellipticpower)

# superEllipticPower (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

## Declaration

```swift
var superEllipticPower: vector_float2 { get set }
```

<a id="Discussion"></a>

## Discussion

This property applies only if the inherited [lightType](../mdllight/lighttype.md) property’s value is [MDLLightType.superElliptical](../mdllighttype/superelliptical.md). A superellipse is a two-dimensional figure that can vary in shape according to two parameters. The x- and y-components of this vector control the general shape of the figure along the corresponding axes:

- A value less than `1.0` produces a star-like shape, with points in the direction of each axis.
- A value of exactly `1.0` produces a diamond shape.
- A value of exactly `2.0` produces a circle.
- A value greater than `2.0` produces a rectangle with rounded corners, with increasing values decreasing the corner radius.

## See Also

### Managing a Light’s Shape

- [areaRadius](arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [aspect](aspect.md): The aspect ratio of the light’s shape.

# superEllipticPower (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

## Declaration

```objectivec
@property (nonatomic, readwrite) vector_float2 superEllipticPower;
```

<a id="Discussion"></a>

## Discussion

This property applies only if the inherited [lightType](../mdllight/lighttype.md) property’s value is [MDLLightTypeSuperElliptical](../mdllighttype/superelliptical.md). A superellipse is a two-dimensional figure that can vary in shape according to two parameters. The x- and y-components of this vector control the general shape of the figure along the corresponding axes:

- A value less than `1.0` produces a star-like shape, with points in the direction of each axis.
- A value of exactly `1.0` produces a diamond shape.
- A value of exactly `2.0` produces a circle.
- A value greater than `2.0` produces a rectangle with rounded corners, with increasing values decreasing the corner radius.

## See Also

### Managing a Light’s Shape

- [areaRadius](arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [aspect](aspect.md): The aspect ratio of the light’s shape.
