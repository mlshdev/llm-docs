> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/interpolationmethod](https://developer.apple.com/documentation/charts/interpolationmethod)

# InterpolationMethod

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The ways in which line or area marks interpolate their data.

## Declaration

```swift
@frozen struct InterpolationMethod
```

## Topics

### Type Properties

- [cardinal](interpolationmethod/cardinal.md): Interpolate data points with cardinal spline.
- [catmullRom](interpolationmethod/catmullrom.md): Interpolate data points with Catmull-Rom spline.
- [linear](interpolationmethod/linear.md): Interpolate data points linearly.
- [monotone](interpolationmethod/monotone.md): Interpolate data points with a cubic spline that preserves monotonicity of the data.
- [stepCenter](interpolationmethod/stepcenter.md): Interpolate data points with a step, or piece-wise constant function, where the data point is at the center of the step.
- [stepEnd](interpolationmethod/stepend.md): Interpolate data points with a step, or piece-wise constant function, where the data point is at the end of the step.
- [stepStart](interpolationmethod/stepstart.md): Interpolate data points with a step, or piece-wise constant function, where the data point is at the start of the step.

### Type Methods

- [cardinal(tension:)](interpolationmethod/cardinal%28tension_%29.md): Interpolate data points with cardinal spline, using the given tension parameter.
- [catmullRom(alpha:)](interpolationmethod/catmullrom%28alpha_%29.md): Interpolate data points with Catmull-Rom spline, using the given alpha parameter.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mark configuration

- [MarkStackingMethod](markstackingmethod.md): The ways in which you can stack marks in a chart.
- [MarkDimension](markdimension.md): An individual dimension representing a mark’s width or height.
- [BasicChartSymbolShape](basicchartsymbolshape.md): A basic chart symbol shape.
- [ChartSymbolShape](chartsymbolshape.md): A type that can act as a shape for the marks that you add to a chart.
- [AnyChartSymbolShape](anychartsymbolshape.md): A type-erased plotting shape.
