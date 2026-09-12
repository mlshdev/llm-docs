> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/drawshading(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/drawshading(_:))

# drawShading(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills the clipping path of a context with the specified shading.

## Declaration

```swift
func drawShading(_ shading: CGShading)
```

## Parameters

- `shading`: A shading object. The shading object is retained; upon return, you may safely release it.

<a id="Discussion"></a>

## Discussion

The preferred way to draw gradients is to use a CGGradient object. See [CGGradient](../cggradient.md).

## See Also

### Related Documentation

- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [drawLinearGradient(\_:start:end:options:)](drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Drawing Gradients and Shadings

- [drawLinearGradient(\_:start:end:options:)](drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGGradientDrawingOptions](../cggradientdrawingoptions.md): Drawing locations for gradients.

# CGContextDrawShading (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills the clipping path of a context with the specified shading.

## Declaration

```objectivec
extern void CGContextDrawShading(CGContextRef c, CGShadingRef shading);
```

## Parameters

- `c`: The graphics context in which to draw the shading.
- `shading`: A shading object. The shading object is retained; upon return, you may safely release it.

<a id="Discussion"></a>

## Discussion

The preferred way to draw gradients is to use a CGGradient object. See [CGGradientRef](../cggradient.md).

## See Also

### Related Documentation

- [CGContextDrawRadialGradient](drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGContextDrawLinearGradient](drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.

### Drawing Gradients and Shadings

- [CGContextDrawLinearGradient](drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [CGContextDrawRadialGradient](drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGGradientDrawingOptions](../cggradientdrawingoptions.md): Drawing locations for gradients.
