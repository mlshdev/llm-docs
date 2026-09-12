> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradient/init(colorsspace:colors:locations:)](https://developer.apple.com/documentation/coregraphics/cggradient/init(colorsspace:colors:locations:))

# init(colorsSpace:colors:locations:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a gradient object from a color space and the provided color objects and locations.

## Declaration

```swift
init?(colorsSpace space: CGColorSpace?, colors: CFArray, locations: UnsafePointer<CGFloat>?)
```

## Parameters

- `space`: The color space to use for the gradient. You cannot use a pattern or indexed color space.
- `colors`: A non-empty array of [CGColor](../cgcolor.md) objects that should be in the color space specified by `space`. If `space` is not `NULL`, each color will be converted (if necessary) to that color space and the gradient will drawn in that color space. Otherwise, each color will be converted to and drawn in the GenericRGB color space.
- `locations`: The location for each color provided in `colors`; each location must be a [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value in the range of `0` to `1`, inclusive. If `0` and `1` are not in the `locations` array, Quartz uses the colors provided that are closest to `0` and `1` for those locations.

  If `locations` is `NULL`, the first color in `colors` is assigned to location `0`, the last color in `colors` is assigned to location `1`, and intervening colors are assigned locations that are at equal intervals in between.

  The `locations` array should contain the same number of items as the `colors` array.

<a id="return-value"></a>

## Return Value

A [CGGradient](../cggradient.md) object.

## See Also

### Related Documentation

- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](../cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [drawLinearGradient(\_:start:end:options:)](../cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Creating Gradient Instances

- [init(colorSpace:colorComponents:locations:count:)](init%28colorspace_colorcomponents_locations_count_%29.md): Creates a CGGradient object from a color space and the provided color components and locations.

# CGGradientCreateWithColors (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a gradient object from a color space and the provided color objects and locations.

## Declaration

```objectivec
extern CGGradientRefCGGradientCreateWithColors(CGColorSpaceRef space, CFArrayRef colors, const CGFloat *locations);
```

## Parameters

- `space`: The color space to use for the gradient. You cannot use a pattern or indexed color space.
- `colors`: A non-empty array of [CGColorRef](../cgcolor.md) objects that should be in the color space specified by `space`. If `space` is not `NULL`, each color will be converted (if necessary) to that color space and the gradient will drawn in that color space. Otherwise, each color will be converted to and drawn in the GenericRGB color space.
- `locations`: The location for each color provided in `colors`; each location must be a [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value in the range of `0` to `1`, inclusive. If `0` and `1` are not in the `locations` array, Quartz uses the colors provided that are closest to `0` and `1` for those locations.

  If `locations` is `NULL`, the first color in `colors` is assigned to location `0`, the last color in `colors` is assigned to location `1`, and intervening colors are assigned locations that are at equal intervals in between.

  The `locations` array should contain the same number of items as the `colors` array.

<a id="return-value"></a>

## Return Value

A [CGGradientRef](../cggradient.md) object.

## See Also

### Related Documentation

- [CGContextDrawRadialGradient](../cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGContextDrawLinearGradient](../cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Creating Gradient Instances

- [CGGradientCreateWithColorComponents](init%28colorspace_colorcomponents_locations_count_%29.md): Creates a CGGradient object from a color space and the provided color components and locations.
