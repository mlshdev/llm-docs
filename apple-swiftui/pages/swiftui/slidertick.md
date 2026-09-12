> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertick](https://developer.apple.com/documentation/swiftui/slidertick)

# SliderTick

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A representation of a tick in a slider, with associated value and optional label.

## Declaration

```swift
struct SliderTick<V> where V : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

The following example shows a slider bound to the value `percentage`. As the slider updates the `currentValueLabel`. The slider also renders marks at a `0.25` step interval.

```swift
@State private var percentage = 0.5

Slider(value: $percentage) {
    Text("Percentage")
} currentValueLabel: {
    Text("\(percentage)%")
} ticks: {
    SliderTickContentForEach(
        stride(from: 0.0, through: 1.0, by: 0.25).map { $0 },
        id: \.self
    ) { value in
        SliderTick(value) {
            label(for: value)
        }
    }
}
```

## Topics

### Structures

- [SliderTick.ID](slidertick/id-swift.struct.md): The identity of a tick.

### Initializers

- [init(\_:)](slidertick/init%28__%29.md): Create a labeled slider tick at a specific value.
- [init(\_:\_:)](slidertick/init%28____%29.md): Conforms when `V` conforms to `BinaryFloatingPoint`. Create a slider tick with a label from a localized string key.
- [init(\_:label:)](slidertick/init%28__label_%29.md): Create a labeled slider tick at a specific value.

### Instance Properties

- [id](slidertick/id-swift.property.md): The identity of a tick, which is derived from its value.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [SliderTickContent](slidertickcontent.md)

## See Also

### Adding ticks to a slider

- [SliderTickBuilder](slidertickbuilder.md): A result builder that constructs `SliderTick`s for use when creating a `Slider`.
- [SliderTickContentForEach](slidertickcontentforeach.md): A type of slider content that creates content by iterating over a collection.
- [TupleSliderTickContent](tupleslidertickcontent.md): Slider content created from a Swift tuple of slider content.
- [SliderTickContent](slidertickcontent.md): A type that provides content for a `SliderTickBuilder`.
