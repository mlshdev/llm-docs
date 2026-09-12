> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/foreach/init(_:content:)](https://developer.apple.com/documentation/swiftui/foreach/init(_:content:))

# init(\_:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates an instance that uniquely identifies and creates map content across updates based on the identity of the underlying data.

## Declaration

```swift
@MainActor init(_ data: Data, @MapContentBuilder content: @escaping (Data.Element) -> Content) where ID == Data.Element.ID, Data.Element : Identifiable
```

## Parameters

- `data`: The identified data that the [ForEach](../foreach.md) instance uses to create map content dynamically.
- `content`: The map content builder that creates map content dynamically.

<a id="discussion"></a>

## Discussion

It’s important that the `id` of a data element doesn’t change unless you replace the data element with a new data element that has a new identity. If the `id` of a data element changes, the content view generated from that data element loses any current state and animations.

## See Also

### Creating a collection

- [init(\_:)](init%28__%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `TableRowContent`. Creates an instance that uniquely identifies and creates table rows across updates based on the identity of the underlying data.
- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the provided key path to the underlying data’s identifier.
- [init(sections:content:)](init%28sections_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the sections of a given view.
- [init(subviews:content:)](init%28subviews_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the subviews of a given view.
