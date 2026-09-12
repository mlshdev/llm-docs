> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/foreach/init(_:)](https://developer.apple.com/documentation/swiftui/foreach/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates an instance that uniquely identifies and creates table rows across updates based on the identity of the underlying data.

## Declaration

```swift
@export(implementation) nonisolated init(_ data: Data) where ID == Data.Element.ID, Content == TableRow<Data.Element>, Data.Element : Identifiable
```

## Parameters

- `data`: The identified data that the [ForEach](../foreach.md) instance uses to create table rows dynamically.

<a id="discussion"></a>

## Discussion

The following example creates a `Person` type that conforms to [Identifiable](https://developer.apple.com/documentation/swift/identifiable), and an array of this type called `people`. A `ForEach` instance iterates over the array, producing new [TableRow](../tablerow.md) instances implicitly.

```swift
private struct Person: Identifiable {
    var id = UUID()
    var name: String
}

@State private var people: [Person] = /* ... */

Table(of: Person.self) {
    TableColumn("ID", value: \.id.uuidString)
    TableColumn("Name", value: \.name)
} rows: {
    Section("Team") {
        /* This is equivalent to the line below:
        ForEach(people) { TableRow($0) }
        */
        ForEach(people)
    }
}
```

## See Also

### Creating a collection

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the identity of the underlying data.
- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the provided key path to the underlying data’s identifier.
- [init(sections:content:)](init%28sections_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the sections of a given view.
- [init(subviews:content:)](init%28subviews_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the subviews of a given view.
