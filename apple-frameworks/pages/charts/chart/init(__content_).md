> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart/init(_:content:)](https://developer.apple.com/documentation/charts/chart/init(_:content:))

# init(\_:content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a chart composed of a series of identifiable marks.

## Declaration

```swift
nonisolated init<Data, C>(_ data: Data, @ContentBuilder content: @escaping (Data.Element) -> C) where Content == ForEach<Data, Data.Element.ID, C>, Data : RandomAccessCollection, C : ChartContent, Data.Element : Identifiable
```

## Parameters

- `data`: A collection of data that conforms to the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.
- `content`: The mark that the chart should draw for each element in the data collection.

<a id="discussion"></a>

## Discussion

This initializer wraps the data that you provide as input in an implicit [ForEach](https://developer.apple.com/documentation/swiftui/foreach) structure. If you need to represent more than one series in your chart, use [init(content:)](init%28content_%29.md) instead.

## See Also

### Creating a chart

- [init(content:)](init%28content_%29.md): Creates a chart composed of any number of data series and individual marks.
- [init(\_:id:content:)](init%28__id_content_%29.md): Creates a chart composed of a series of marks.
