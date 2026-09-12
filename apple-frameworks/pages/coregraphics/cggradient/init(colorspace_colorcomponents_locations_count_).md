> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradient/init(colorspace:colorcomponents:locations:count:)](https://developer.apple.com/documentation/coregraphics/cggradient/init(colorspace:colorcomponents:locations:count:))

# init(colorSpace:colorComponents:locations:count:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a CGGradient object from a color space and the provided color components and locations.

## Declaration

```swift
init?(colorSpace space: CGColorSpace, colorComponents components: UnsafePointer<CGFloat>, locations: UnsafePointer<CGFloat>?, count: Int)
```

## Parameters

- `space`: The color space to use for the gradient. You cannot use a pattern or indexed color space.
- `components`: The color components for each color that defines the gradient. The components should be in the color space specified by `space`. If you are unsure of the number of components, you can call the function [numberOfComponents](../cgcolorspace/numberofcomponents.md).

  The number of items in this array should be the product of `count` and the number of components in the color space. For example, if the color space is an RGBA color space and you want to use two colors in the gradient (one for a starting location and another for an ending location), then you need to provide 8 values in `components`—red, green, blue, and alpha values for the first color, followed by red, green, blue, and alpha values for the second color.
- `locations`: The location for each color provided in `components`. Each location must be a `CGFloat` value in the range of 0 to 1, inclusive. If 0 and 1 are not in the `locations` array, Quartz uses the colors provided that are closest to 0 and 1 for those locations.

  If `locations`  is `NULL`, the first color in `colors`  is assigned to location `0`, the last color in`colors`  is assigned to location `1`, and intervening colors are assigned locations that are at equal intervals in between.
- `count`: The number of locations provided in the `locations` parameters.

<a id="return-value"></a>

## Return Value

A CGGradient object.

## See Also

### Related Documentation

- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](../cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)
- [drawLinearGradient(\_:start:end:options:)](../cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Creating Gradient Instances

- [init(colorsSpace:colors:locations:)](init%28colorsspace_colors_locations_%29.md): Creates a gradient object from a color space and the provided color objects and locations.

# CGGradientCreateWithColorComponents (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a CGGradient object from a color space and the provided color components and locations.

## Declaration

```objectivec
extern CGGradientRefCGGradientCreateWithColorComponents(CGColorSpaceRef space, const CGFloat *components, const CGFloat *locations, size_t count);
```

## Parameters

- `space`: The color space to use for the gradient. You cannot use a pattern or indexed color space.
- `components`: The color components for each color that defines the gradient. The components should be in the color space specified by `space`. If you are unsure of the number of components, you can call the function [CGColorSpaceGetNumberOfComponents](../cgcolorspace/numberofcomponents.md).

  The number of items in this array should be the product of `count` and the number of components in the color space. For example, if the color space is an RGBA color space and you want to use two colors in the gradient (one for a starting location and another for an ending location), then you need to provide 8 values in `components`—red, green, blue, and alpha values for the first color, followed by red, green, blue, and alpha values for the second color.
- `locations`: The location for each color provided in `components`. Each location must be a `CGFloat` value in the range of 0 to 1, inclusive. If 0 and 1 are not in the `locations` array, Quartz uses the colors provided that are closest to 0 and 1 for those locations.

  If `locations`  is `NULL`, the first color in `colors`  is assigned to location `0`, the last color in`colors`  is assigned to location `1`, and intervening colors are assigned locations that are at equal intervals in between.
- `count`: The number of locations provided in the `locations` parameters.

<a id="return-value"></a>

## Return Value

A CGGradient object.

## See Also

### Related Documentation

- [CGContextDrawRadialGradient](../cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)
- [CGContextDrawLinearGradient](../cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Creating Gradient Instances

- [CGGradientCreateWithColors](init%28colorsspace_colors_locations_%29.md): Creates a gradient object from a color space and the provided color objects and locations.
