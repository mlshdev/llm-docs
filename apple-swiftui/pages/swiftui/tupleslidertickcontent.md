> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tupleslidertickcontent](https://developer.apple.com/documentation/swiftui/tupleslidertickcontent)

# TupleSliderTickContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Slider content created from a Swift tuple of slider content.

## Declaration

```swift
@frozen struct TupleSliderTickContent<V, T> where V : BinaryFloatingPoint
```

## Topics

### Instance Properties

- [value](tupleslidertickcontent/value.md)

### Type Aliases

- [TupleSliderTickContent.TicksCollection](tupleslidertickcontent/tickscollection.md)

## Relationships

### Conforms To

- [SliderTickContent](slidertickcontent.md)

## See Also

### Adding ticks to a slider

- [SliderTick](slidertick.md): A representation of a tick in a slider, with associated value and optional label.
- [SliderTickBuilder](slidertickbuilder.md): A result builder that constructs `SliderTick`s for use when creating a `Slider`.
- [SliderTickContentForEach](slidertickcontentforeach.md): A type of slider content that creates content by iterating over a collection.
- [SliderTickContent](slidertickcontent.md): A type that provides content for a `SliderTickBuilder`.
