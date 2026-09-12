> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/editactions](https://developer.apple.com/documentation/swiftui/editactions)

# EditActions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A set of edit actions on a collection of data that a view can offer to a user.

## Declaration

```swift
struct EditActions<Data>
```

## Topics

### Getting edit operations

- [all](editactions/all-45m4m.md): Conforms when `Data` conforms to `MutableCollection` and `RangeReplaceableCollection`. All the edit actions available on this collection.
- [all](editactions/all-4dctm.md): Conforms when `Data` conforms to `MutableCollection`. All the edit actions available on this collection.
- [all](editactions/all-4uyun.md): Conforms when `Data` conforms to `RangeReplaceableCollection`. All the edit actions available on this collection.
- [all](editactions/all-6ryvk.md): All the edit actions available on this collection.
- [delete](editactions/delete.md): Conforms when `Data` conforms to `RangeReplaceableCollection`. An edit action that allows the user to delete one or more elements of a collection.
- [move](editactions/move.md): Conforms when `Data` conforms to `MutableCollection`. An edit action that allows the user to move elements of a collection.

### Creating an edit operation

- [init(rawValue:)](editactions/init%28rawvalue_%29.md): Creates a new set from a raw value.
- [rawValue](editactions/rawvalue.md): The raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Editing a list

- [moveDisabled(\_:)](view/movedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is movable.
- [deleteDisabled(\_:)](view/deletedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is deletable.
- [editMode](environmentvalues/editmode.md): An indication of whether the user can edit the contents of a view associated with this environment.
- [EditMode](editmode.md): A mode that indicates whether the user can edit a view’s content.
- [EditableCollectionContent](editablecollectioncontent.md): An opaque wrapper view that adds editing capabilities to a row in a list.
- [IndexedIdentifierCollection](indexedidentifiercollection.md): A collection wrapper that iterates over the indices and identifiers of a collection together.
