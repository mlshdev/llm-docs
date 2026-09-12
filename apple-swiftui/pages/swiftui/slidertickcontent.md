> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickcontent](https://developer.apple.com/documentation/swiftui/slidertickcontent)

# SliderTickContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that provides content for a `SliderTickBuilder`.

## Declaration

```swift
protocol SliderTickContent<Value>
```

## Topics

### Associated Types

- [Body](slidertickcontent/body-swift.associatedtype.md)
- [Value](slidertickcontent/value.md)

### Instance Properties

- [body](slidertickcontent/body-swift.property.md): The value of this type’s content.

## Relationships

### Conforming Types

- [SliderTick](slidertick.md)
- [SliderTickContentForEach](slidertickcontentforeach.md)
- [TupleSliderTickContent](tupleslidertickcontent.md)

## See Also

### Adding ticks to a slider

- [SliderTick](slidertick.md): A representation of a tick in a slider, with associated value and optional label.
- [SliderTickBuilder](slidertickbuilder.md): A result builder that constructs `SliderTick`s for use when creating a `Slider`.
- [SliderTickContentForEach](slidertickcontentforeach.md): A type of slider content that creates content by iterating over a collection.
- [TupleSliderTickContent](tupleslidertickcontent.md): Slider content created from a Swift tuple of slider content.
