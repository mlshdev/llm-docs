> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/lineargradient(_:startpoint:endpoint:options:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/lineargradient(_:startpoint:endpoint:options:))

# linearGradient(\_:startPoint:endPoint:options:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a shading instance that fills a linear (axial) gradient.

## Declaration

```swift
static func linearGradient(_ gradient: AnyGradient, startPoint: CGPoint, endPoint: CGPoint, options: GraphicsContext.GradientOptions = GradientOptions()) -> GraphicsContext.Shading
```

## Parameters

- `gradient`: An [AnyGradient](../../anygradient.md) instance that defines the colors of the gradient.
- `startPoint`: The start point of the gradient axis.
- `endPoint`: The end point of the gradient axis.
- `options`: Options that you use to configure the gradient.

<a id="return-value"></a>

## Return Value

A shading instance filled with a linear gradient.

<a id="discussion"></a>

## Discussion

The shading instance defines an axis from `startPoint` to `endPoint` in the current user space and maps colors from `gradient` to lines perpendicular to the axis.

## See Also

### Gradients

- [radialGradient(\_:center:startRadius:endRadius:options:)](radialgradient%28__center_startradius_endradius_options_%29.md): Returns a shading instance that fills a radial gradient.
- [conicGradient(\_:center:angle:options:)](conicgradient%28__center_angle_options_%29.md): Returns a shading instance that fills a conic (angular) gradient.
