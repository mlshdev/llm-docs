> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart3d/init(_:content:)](https://developer.apple.com/documentation/charts/chart3d/init(_:content:))

# init(\_:content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a 3D chart composed of a series of identifiable marks.

## Declaration

```swift
nonisolated init<Data, C>(_ data: Data, @Chart3DContentBuilder content: @escaping (Data.Element) -> C) where Content == ForEach<Data, Data.Element.ID, C>, Data : RandomAccessCollection, C : Chart3DContent, Data.Element : Identifiable
```

## Parameters

- `data`: A collection of data that conforms to the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.
- `content`: The mark that the chart should draw for each element in the data collection.

<a id="discussion"></a>

## Discussion

This initializer wraps the data that you provide as input in an implicit [ForEach](https://developer.apple.com/documentation/swiftui/foreach) structure. If you need to represent more than one series in your chart, use [init(content:)](init%28content_%29.md) instead.

## See Also

### Creating 3D charts

- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Content` conforms to `Chart3DContent`. Creates a 3D chart composed of a series of marks.
- [init(content:)](init%28content_%29.md)
