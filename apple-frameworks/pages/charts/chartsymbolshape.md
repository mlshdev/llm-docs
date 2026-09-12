> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartsymbolshape](https://developer.apple.com/documentation/charts/chartsymbolshape)

# ChartSymbolShape

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that can act as a shape for the marks that you add to a chart.

## Declaration

```swift
protocol ChartSymbolShape : Shape
```

## Topics

### Instance Properties

- [perceptualUnitRect](chartsymbolshape/perceptualunitrect.md): Returns a rectangle that bounds the shape in such a way that viewers perceive it as having the same size and position as a unit rectangle.

### Instance Methods

- [strokeBorder(lineWidth:)](chartsymbolshape/strokeborder%28linewidth_%29.md): Conforms when `Self` conforms to `InsettableShape`.
- [strokeBorder(style:)](chartsymbolshape/strokeborder%28style_%29.md): Conforms when `Self` conforms to `InsettableShape`.

### Type Properties

- [asterisk](chartsymbolshape/asterisk.md): Conforms when `Self` is `BasicChartSymbolShape`. Asterisk symbol.
- [circle](chartsymbolshape/circle.md): Conforms when `Self` is `BasicChartSymbolShape`. Circle symbol.
- [cross](chartsymbolshape/cross.md): Conforms when `Self` is `BasicChartSymbolShape`. Cross symbol.
- [diamond](chartsymbolshape/diamond.md): Conforms when `Self` is `BasicChartSymbolShape`. Diamond symbol.
- [pentagon](chartsymbolshape/pentagon.md): Conforms when `Self` is `BasicChartSymbolShape`. Pentagon symbol.
- [plus](chartsymbolshape/plus.md): Conforms when `Self` is `BasicChartSymbolShape`. Plus symbol.
- [square](chartsymbolshape/square.md): Conforms when `Self` is `BasicChartSymbolShape`. Square symbol.
- [triangle](chartsymbolshape/triangle.md): Conforms when `Self` is `BasicChartSymbolShape`. Triangle symbol.

## Relationships

### Inherits From

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](https://developer.apple.com/documentation/swiftui/shape)
- [View](https://developer.apple.com/documentation/swiftui/view)

### Conforming Types

- [AnyChartSymbolShape](anychartsymbolshape.md)
- [BasicChartSymbolShape](basicchartsymbolshape.md)

## See Also

### Mark configuration

- [MarkStackingMethod](markstackingmethod.md): The ways in which you can stack marks in a chart.
- [MarkDimension](markdimension.md): An individual dimension representing a mark’s width or height.
- [InterpolationMethod](interpolationmethod.md): The ways in which line or area marks interpolate their data.
- [BasicChartSymbolShape](basicchartsymbolshape.md): A basic chart symbol shape.
- [AnyChartSymbolShape](anychartsymbolshape.md): A type-erased plotting shape.
