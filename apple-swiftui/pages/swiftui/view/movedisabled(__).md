> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/movedisabled(_:)](https://developer.apple.com/documentation/swiftui/view/movedisabled(_:))

# moveDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a condition for whether the view’s view hierarchy is movable.

## Declaration

```swift
nonisolated func moveDisabled(_ isDisabled: Bool) -> some View

```

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

## See Also

### Editing a list

- [deleteDisabled(\_:)](deletedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is deletable.
- [editMode](../environmentvalues/editmode.md): An indication of whether the user can edit the contents of a view associated with this environment.
- [EditMode](../editmode.md): A mode that indicates whether the user can edit a view’s content.
- [EditActions](../editactions.md): A set of edit actions on a collection of data that a view can offer to a user.
- [EditableCollectionContent](../editablecollectioncontent.md): An opaque wrapper view that adds editing capabilities to a row in a list.
- [IndexedIdentifierCollection](../indexedidentifiercollection.md): A collection wrapper that iterates over the indices and identifiers of a collection together.
