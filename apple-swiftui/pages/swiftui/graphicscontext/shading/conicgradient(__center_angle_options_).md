> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/conicgradient(_:center:angle:options:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/conicgradient(_:center:angle:options:))

# conicGradient(\_:center:angle:options:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a shading instance that fills a conic (angular) gradient.

## Declaration

```swift
static func conicGradient(_ gradient: AnyGradient, center: CGPoint, angle: Angle = Angle(), options: GraphicsContext.GradientOptions = GradientOptions()) -> GraphicsContext.Shading
```

## Parameters

- `gradient`: An [AnyGradient](../../anygradient.md) instance that defines the colors of the gradient.
- `center`: The point in the current user space on which SwiftUI centers the gradient.
- `angle`: The angle about the center that SwiftUI uses to start and finish the gradient. The gradient sweeps all the way around the center.
- `options`: Options that you use to configure the gradient.

<a id="return-value"></a>

## Return Value

A shading instance filled with a conic gradient.

## See Also

### Gradients

- [linearGradient(\_:startPoint:endPoint:options:)](lineargradient%28__startpoint_endpoint_options_%29.md): Returns a shading instance that fills a linear (axial) gradient.
- [radialGradient(\_:center:startRadius:endRadius:options:)](radialgradient%28__center_startradius_endradius_options_%29.md): Returns a shading instance that fills a radial gradient.
