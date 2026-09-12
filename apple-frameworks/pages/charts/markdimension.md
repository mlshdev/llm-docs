> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/markdimension](https://developer.apple.com/documentation/charts/markdimension)

# MarkDimension

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An individual dimension representing a mark’s width or height.

## Declaration

```swift
@frozen struct MarkDimension
```

## Topics

### Supporting types

- [MarkDimensions](markdimensions.md)

### Initializers

- [init(floatLiteral:)](markdimension/init%28floatliteral_%29.md): Creates a constant width or height from a floating point value.
- [init(integerLiteral:)](markdimension/init%28integerliteral_%29.md): Creates a constant width or height from an integer.

### Type Properties

- [automatic](markdimension/automatic.md): A dimension that determines its value automatically.

### Type Methods

- [fixed(\_:)](markdimension/fixed%28__%29.md): A constant dimension.
- [inset(\_:)](markdimension/inset%28__%29.md): A dimension that’s the step size minus the specified inset value on each side.
- [ratio(\_:)](markdimension/ratio%28__%29.md): A dimension that’s proportional to the scale step size, using the specified ratio.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mark configuration

- [MarkStackingMethod](markstackingmethod.md): The ways in which you can stack marks in a chart.
- [InterpolationMethod](interpolationmethod.md): The ways in which line or area marks interpolate their data.
- [BasicChartSymbolShape](basicchartsymbolshape.md): A basic chart symbol shape.
- [ChartSymbolShape](chartsymbolshape.md): A type that can act as a shape for the marks that you add to a chart.
- [AnyChartSymbolShape](anychartsymbolshape.md): A type-erased plotting shape.
