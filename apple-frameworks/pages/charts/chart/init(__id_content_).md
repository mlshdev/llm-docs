> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart/init(_:id:content:)](https://developer.apple.com/documentation/charts/chart/init(_:id:content:))

# init(\_:id:content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a chart composed of a series of marks.

## Declaration

```swift
nonisolated init<Data, ID, C>(_ data: Data, id: KeyPath<Data.Element, ID>, @ContentBuilder content: @escaping (Data.Element) -> C) where Content == ForEach<Data, ID, C>, Data : RandomAccessCollection, ID : Hashable, C : ChartContent
```

## Parameters

- `data`: A collection of data.
- `id`: A key path that represents a property of each data element that can act as a unique identifier for that element. Ensure that this property conforms to the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol.
- `content`: The mark that the chart should draw for each element in the data collection.

<a id="discussion"></a>

## Discussion

This initializer wraps the data that you provide as input in an implicit [ForEach](https://developer.apple.com/documentation/swiftui/foreach) structure. If you need to represent more than one series in your chart, use [init(content:)](init%28content_%29.md) instead.

## See Also

### Creating a chart

- [init(content:)](init%28content_%29.md): Creates a chart composed of any number of data series and individual marks.
- [init(\_:content:)](init%28__content_%29.md): Creates a chart composed of a series of identifiable marks.
