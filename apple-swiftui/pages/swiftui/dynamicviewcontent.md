> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent](https://developer.apple.com/documentation/swiftui/dynamicviewcontent)

# DynamicViewContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type of view that generates views from an underlying collection of data.

## Declaration

```swift
protocol DynamicViewContent<Data> : View
```

## Topics

### Managing the data

- [data](dynamicviewcontent/data-swift.property.md): The collection of underlying data.
- [Data](dynamicviewcontent/data-swift.associatedtype.md): The type of the underlying collection of data.

### Responding to updates

- [onDelete(perform:)](dynamicviewcontent/ondelete%28perform_%29.md): Sets the deletion action for the dynamic view. You must delete the corresponding item within `action`, as it will be called after the row has already been removed from the [List](list.md).
- [onInsert(of:perform:)](dynamicviewcontent/oninsert%28of_perform_%29.md): Sets the insert action for the dynamic view.
- [onMove(perform:)](dynamicviewcontent/onmove%28perform_%29.md): Sets the move action for the dynamic view.
- [dropDestination(for:action:)](dynamicviewcontent/dropdestination%28for_action_%29.md): Sets the insert action for the dynamic view.

### Reordering

- [reorderable()](dynamicviewcontent/reorderable%28%29.md): Enables reordering of views from this content inside the scope of a reorderable container modifier.
- [reorderable(collectionID:)](dynamicviewcontent/reorderable%28collectionid_%29.md): Enables reordering views from this content within and between sections in the scope of a reorderable container modifier.

### Deprecated symbols

- [onInsert(of:perform:)](dynamicviewcontent/oninsert%28of_perform_%29-40hwa.md): Deprecated. Sets the insert action for the dynamic view.

## Relationships

### Inherits From

- [View](view.md)

### Conforming Types

- [ForEach](foreach.md)
- [ModifiedContent](modifiedcontent.md)

## See Also

### Iterating over dynamic data

- [ForEach](foreach.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Copyable`, `ID` conforms to `Escapable`, `ID` conforms to `Hashable`, and `Content` conforms to `View`. A structure that computes views on demand from an underlying collection of identified data.
- [ForEachSectionCollection](foreachsectioncollection.md): A collection which allows a view to be treated as a collection of its sections in a for each loop.
- [ForEachSubviewCollection](foreachsubviewcollection.md): A collection which allows a view to be treated as a collection of its subviews in a for each loop.
