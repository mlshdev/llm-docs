> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlarealight/arearadius](https://developer.apple.com/documentation/modelio/mdlarealight/arearadius)

# areaRadius (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The radius, in units of local coordinate space, of the area from which light emanates.

## Declaration

```swift
var areaRadius: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The effect of radius on a light’s shape depends on the value of its inherited [lightType](../mdllight/lighttype.md) property:

- [MDLLightType.linear](../mdllighttype/linear.md): The light is shaped like a line segment, centered on the origin of its local coordinate space and extending along the x-axis with a total length of twice the [areaRadius](arearadius.md) value.
- [MDLLightType.discArea](../mdllighttype/discarea.md): The light is shaped like a circle or ellipse in the xy-plane of its local coordinate space. If the [aspect](aspect.md) value is `1.0`, the [areaRadius](arearadius.md) value is the circle’s radius. If the [aspect](aspect.md) value is less than one, the [areaRadius](arearadius.md) value is the major radius of the ellipse, and the minor radius is equal to the [areaRadius](arearadius.md) value times the [aspect](aspect.md) value.
- [MDLLightType.rectangularArea](../mdllighttype/rectangulararea.md): The light is shaped like a rectangle in the xy-plane of its local coordinate space. If the [aspect](aspect.md) value is `1.0`, the light is a square and [areaRadius](arearadius.md) value is half the square’s width or length. If the [aspect](aspect.md) value is less than one, the [areaRadius](arearadius.md) value is half the rectangle’s longer dimension, and the shorter dimension is the [areaRadius](arearadius.md) value, times the [aspect](aspect.md) value, times two.
- [MDLLightType.superElliptical](../mdllighttype/superelliptical.md): The light is shaped like a superellipse—a two-dimensional figure in the xy-plane of its local coordinate space that can vary between shapes such as stars, diamonds, circles, and squares with rounded corners. The [superEllipticPower](superellipticpower.md) property determines the general shape of the light, and the [aspect](aspect.md) property controls the ratio of the longer and shorter dimensions of the shape.

## See Also

### Managing a Light’s Shape

- [aspect](aspect.md): The aspect ratio of the light’s shape.
- [superEllipticPower](superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

# areaRadius (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The radius, in units of local coordinate space, of the area from which light emanates.

## Declaration

```objectivec
@property (nonatomic, readwrite) float areaRadius;
```

<a id="Discussion"></a>

## Discussion

The effect of radius on a light’s shape depends on the value of its inherited [lightType](../mdllight/lighttype.md) property:

- [MDLLightTypeLinear](../mdllighttype/linear.md): The light is shaped like a line segment, centered on the origin of its local coordinate space and extending along the x-axis with a total length of twice the [areaRadius](arearadius.md) value.
- [MDLLightTypeDiscArea](../mdllighttype/discarea.md): The light is shaped like a circle or ellipse in the xy-plane of its local coordinate space. If the [aspect](aspect.md) value is `1.0`, the [areaRadius](arearadius.md) value is the circle’s radius. If the [aspect](aspect.md) value is less than one, the [areaRadius](arearadius.md) value is the major radius of the ellipse, and the minor radius is equal to the [areaRadius](arearadius.md) value times the [aspect](aspect.md) value.
- [MDLLightTypeRectangularArea](../mdllighttype/rectangulararea.md): The light is shaped like a rectangle in the xy-plane of its local coordinate space. If the [aspect](aspect.md) value is `1.0`, the light is a square and [areaRadius](arearadius.md) value is half the square’s width or length. If the [aspect](aspect.md) value is less than one, the [areaRadius](arearadius.md) value is half the rectangle’s longer dimension, and the shorter dimension is the [areaRadius](arearadius.md) value, times the [aspect](aspect.md) value, times two.
- [MDLLightTypeSuperElliptical](../mdllighttype/superelliptical.md): The light is shaped like a superellipse—a two-dimensional figure in the xy-plane of its local coordinate space that can vary between shapes such as stars, diamonds, circles, and squares with rounded corners. The [superEllipticPower](superellipticpower.md) property determines the general shape of the light, and the [aspect](aspect.md) property controls the ratio of the longer and shorter dimensions of the shape.

## See Also

### Managing a Light’s Shape

- [aspect](aspect.md): The aspect ratio of the light’s shape.
- [superEllipticPower](superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.
