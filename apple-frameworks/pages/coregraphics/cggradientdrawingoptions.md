> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradientdrawingoptions](https://developer.apple.com/documentation/coregraphics/cggradientdrawingoptions)

# CGGradientDrawingOptions (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Drawing locations for gradients.

## Declaration

```swift
struct CGGradientDrawingOptions
```

## Topics

### Constants

- [drawsBeforeStartLocation](cggradientdrawingoptions/drawsbeforestartlocation.md): The fill should extend beyond the starting location. The color that extends beyond the starting point is the solid color defined by the [CGGradient](cggradient.md) object to be at location 0.
- [drawsAfterEndLocation](cggradientdrawingoptions/drawsafterendlocation.md): The fill should extend beyond the ending location. The color that extends beyond the ending point is the solid color defined by the [CGGradient](cggradient.md) object to be at location 1.

### Initializers

- [init(rawValue:)](cggradientdrawingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Drawing Gradients and Shadings

- [drawLinearGradient(\_:start:end:options:)](cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [drawShading(\_:)](cgcontext/drawshading%28__%29.md): Fills the clipping path of a context with the specified shading.

# CGGradientDrawingOptions (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Drawing locations for gradients.

## Declaration

```objectivec
enum CGGradientDrawingOptions : uint32_t;
```

## Topics

### Constants

- [kCGGradientDrawsBeforeStartLocation](cggradientdrawingoptions/drawsbeforestartlocation.md): The fill should extend beyond the starting location. The color that extends beyond the starting point is the solid color defined by the [CGGradientRef](cggradient.md) object to be at location 0.
- [kCGGradientDrawsAfterEndLocation](cggradientdrawingoptions/drawsafterendlocation.md): The fill should extend beyond the ending location. The color that extends beyond the ending point is the solid color defined by the [CGGradientRef](cggradient.md) object to be at location 1.

## See Also

### Drawing Gradients and Shadings

- [CGContextDrawLinearGradient](cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [CGContextDrawRadialGradient](cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGContextDrawShading](cgcontext/drawshading%28__%29.md): Fills the clipping path of a context with the specified shading.
