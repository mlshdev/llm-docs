> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading](https://developer.apple.com/documentation/swiftui/graphicscontext/shading)

# GraphicsContext.Shading

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A color or pattern that you can use to outline or fill a path.

## Declaration

```swift
struct Shading
```

<a id="overview"></a>

## Overview

Use a shading instance to describe the color or pattern of a path that you outline with a method like [stroke(\_:with:style:)](stroke%28__with_style_%29.md), or of the interior of a region that you fill with the [fill(\_:with:style:)](fill%28__with_style_%29.md) method. Get a shading instance by calling one of the `Shading` structure’s factory methods. You can base shading on:

- A [Color](../color.md).
- A [Gradient](../gradient.md).
- Any type that conforms to [ShapeStyle](../shapestyle.md).
- An [Image](../image.md).
- What you’ve already drawn into the context.
- A collection of other shading instances.

## Topics

### Colors

- [color(\_:)](shading/color%28__%29.md): Returns a shading instance that fills with a color.
- [color(\_:red:green:blue:opacity:)](shading/color%28__red_green_blue_opacity_%29.md): Returns a shading instance that fills with a color in the given color space.
- [color(\_:white:opacity:)](shading/color%28__white_opacity_%29.md): Returns a shading instance that fills with a monochrome color in the given color space.

### Gradients

- [linearGradient(\_:startPoint:endPoint:options:)](shading/lineargradient%28__startpoint_endpoint_options_%29.md): Returns a shading instance that fills a linear (axial) gradient.
- [radialGradient(\_:center:startRadius:endRadius:options:)](shading/radialgradient%28__center_startradius_endradius_options_%29.md): Returns a shading instance that fills a radial gradient.
- [conicGradient(\_:center:angle:options:)](shading/conicgradient%28__center_angle_options_%29.md): Returns a shading instance that fills a conic (angular) gradient.

### Other shape styles

- [style(\_:)](shading/style%28__%29.md): Returns a shading instance that fills with the given shape style.
- [foreground](shading/foreground.md): A shading instance that fills with the foreground style from the graphics context’s environment.

### Images

- [tiledImage(\_:origin:sourceRect:scale:)](shading/tiledimage%28__origin_sourcerect_scale_%29.md): Returns a shading instance that tiles an image across the infinite plane.

### Composite shading types

- [palette(\_:)](shading/palette%28__%29.md): Returns a multilevel shading instance constructed from an array of shading instances.
- [backdrop](shading/backdrop.md): A shading instance that draws a copy of the current background.

### Using a custom Metal shader

- [shader(\_:bounds:)](shading/shader%28__bounds_%29.md): Returns a shading instance that fills with the results of querying a shader for each pixel.

### Type Methods

- [meshGradient(\_:)](shading/meshgradient%28__%29.md): Returns a shading instance that fills with a mesh gradient.
- [radialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](shading/radialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Returns a shading that fills a two-point radial gradient.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing a path

- [stroke(\_:with:lineWidth:)](stroke%28__with_linewidth_%29.md): Draws a path into the context with a specified line width.
- [stroke(\_:with:style:)](stroke%28__with_style_%29.md): Draws a path into the context with a specified stroke style.
- [fill(\_:with:style:)](fill%28__with_style_%29.md): Draws a path into the context and fills the outlined region.
- [GraphicsContext.GradientOptions](gradientoptions.md): Options that affect the rendering of color gradients.
