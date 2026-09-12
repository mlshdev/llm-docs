> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickcontentforeach](https://developer.apple.com/documentation/swiftui/slidertickcontentforeach)

# SliderTickContentForEach

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type of slider content that creates content by iterating over a collection.

## Declaration

```swift
struct SliderTickContentForEach<Data, ID, Content> where Data : RandomAccessCollection, ID : Hashable, Content : SliderTickContent
```

## Topics

### Initializers

- [init(\_:content:)](slidertickcontentforeach/init%28__content_%29.md): Creates an instance that uniquely identifies and creates slider ticks across updates based on the identity of the underlying data.
- [init(\_:id:content:)](slidertickcontentforeach/init%28__id_content_%29.md): Creates an instance that uniquely identifies and creates slider ticks across updates based on the provided key path to the underlying data’s identifier.

## Relationships

### Conforms To

- [SliderTickContent](slidertickcontent.md)

## See Also

### Adding ticks to a slider

- [SliderTick](slidertick.md): A representation of a tick in a slider, with associated value and optional label.
- [SliderTickBuilder](slidertickbuilder.md): A result builder that constructs `SliderTick`s for use when creating a `Slider`.
- [TupleSliderTickContent](tupleslidertickcontent.md): Slider content created from a Swift tuple of slider content.
- [SliderTickContent](slidertickcontent.md): A type that provides content for a `SliderTickBuilder`.
