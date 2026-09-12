> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickcontentforeach/init(_:content:)](https://developer.apple.com/documentation/swiftui/slidertickcontentforeach/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an instance that uniquely identifies and creates slider ticks across updates based on the identity of the underlying data.

## Declaration

```swift
nonisolated init<V>(_ data: Data, @SliderTickBuilder<V> content: @escaping (Data.Element) -> Content) where ID == V.ID, V : Identifiable, V == Data.Element, Data.Element == Content.Value
```

## Parameters

- `data`: The identified data that the [ForEach](../foreach.md) instance uses to create slider ticks dynamically.
- `content`: The builder that creates ticks dynamically for each element.
