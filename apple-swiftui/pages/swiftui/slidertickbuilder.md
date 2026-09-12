> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickbuilder](https://developer.apple.com/documentation/swiftui/slidertickbuilder)

# SliderTickBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A result builder that constructs `SliderTick`s for use when creating a `Slider`.

## Declaration

```swift
@resultBuilder struct SliderTickBuilder<V> where V : BinaryFloatingPoint
```

## Topics

### Type Methods

- [buildBlock()](slidertickbuilder/buildblock%28%29.md): Creates a single slider content result.
- [buildBlock(\_:)](slidertickbuilder/buildblock%28__%29.md): Creates a single slider content result.
- [buildBlock(\_:\_:)](slidertickbuilder/buildblock%28____%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:)](slidertickbuilder/buildblock%28______%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:)](slidertickbuilder/buildblock%28________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28__________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28____________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28______________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28________________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28__________________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slidertickbuilder/buildblock%28____________________%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`.
- [buildEither(first:)](slidertickbuilder/buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](slidertickbuilder/buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildExpression(\_:)](slidertickbuilder/buildexpression%28__%29.md): Creates a single slider content expression.
- [buildIf(\_:)](slidertickbuilder/buildif%28__%29.md): Produces an optional slider content for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## See Also

### Adding ticks to a slider

- [SliderTick](slidertick.md): A representation of a tick in a slider, with associated value and optional label.
- [SliderTickContentForEach](slidertickcontentforeach.md): A type of slider content that creates content by iterating over a collection.
- [TupleSliderTickContent](tupleslidertickcontent.md): Slider content created from a Swift tuple of slider content.
- [SliderTickContent](slidertickcontent.md): A type that provides content for a `SliderTickBuilder`.
