> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/editmode](https://developer.apple.com/documentation/swiftui/editmode)

# EditMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

A mode that indicates whether the user can edit a view’s content.

## Declaration

```swift
enum EditMode
```

<a id="overview"></a>

## Overview

You receive an optional binding to the edit mode state when you read the [editMode](environmentvalues/editmode.md) environment value. The binding contains an `EditMode` value that indicates whether edit mode is active, and that you can use to change the mode. To learn how to read an environment value, see [EnvironmentValues](environmentvalues.md).

Certain built-in views automatically alter their appearance and behavior in edit mode. For example, a [List](list.md) with a [ForEach](foreach.md) that’s configured with the [onDelete(perform:)](dynamicviewcontent/ondelete%28perform_%29.md) or [onMove(perform:)](dynamicviewcontent/onmove%28perform_%29.md) modifier provides controls to delete or move list items while in edit mode. On devices without an attached keyboard and mouse or trackpad, people can make multiple selections in lists only when edit mode is active.

You can also customize your own views to react to edit mode. The following example replaces a read-only [Text](text.md) view with an editable [TextField](textfield.md), checking for edit mode by testing the wrapped value’s [isEditing](editmode/isediting.md) property:

```swift
@Environment(\.editMode) private var editMode
@State private var name = "Maria Ruiz"

var body: some View {
    Form {
        if editMode?.wrappedValue.isEditing == true {
            TextField("Name", text: $name)
        } else {
            Text(name)
        }
    }
    .animation(nil, value: editMode?.wrappedValue)
    .toolbar { // Assumes embedding this view in a NavigationView.
        EditButton()
    }
}
```

You can set the edit mode through the binding, or you can rely on an [EditButton](editbutton.md) to do that for you, as the example above demonstrates. The button activates edit mode when the user taps it, and disables the mode when the user taps again.

## Topics

### Getting edit modes

- [EditMode.active](editmode/active.md): The user can edit the view content.
- [EditMode.inactive](editmode/inactive.md): The user can’t edit the view content.
- [EditMode.transient](editmode/transient.md): The view is in a temporary edit mode.

### Checking for editing mode

- [isEditing](editmode/isediting.md): Indicates whether a view is being edited.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing a list

- [moveDisabled(\_:)](view/movedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is movable.
- [deleteDisabled(\_:)](view/deletedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is deletable.
- [editMode](environmentvalues/editmode.md): An indication of whether the user can edit the contents of a view associated with this environment.
- [EditActions](editactions.md): A set of edit actions on a collection of data that a view can offer to a user.
- [EditableCollectionContent](editablecollectioncontent.md): An opaque wrapper view that adds editing capabilities to a row in a list.
- [IndexedIdentifierCollection](indexedidentifiercollection.md): A collection wrapper that iterates over the indices and identifiers of a collection together.
