> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/editbutton](https://developer.apple.com/documentation/swiftui/editbutton)

# EditButton

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A button that toggles the edit mode environment value.

## Declaration

```swift
nonisolated struct EditButton
```

<a id="overview"></a>

## Overview

An edit button toggles the environment’s [editMode](environmentvalues/editmode.md) value for content within a container that supports edit mode. In the following example, an edit button placed inside a [NavigationView](navigationview.md) supports editing of a [List](list.md):

```swift
@State private var fruits = [
    "Apple",
    "Banana",
    "Papaya",
    "Mango"
]

var body: some View {
    NavigationView {
        List {
            ForEach(fruits, id: \.self) { fruit in
                Text(fruit)
            }
            .onDelete { fruits.remove(atOffsets: $0) }
            .onMove { fruits.move(fromOffsets: $0, toOffset: $1) }
        }
        .navigationTitle("Fruits")
        .toolbar {
            EditButton()
        }
    }
}
```

Because the [ForEach](foreach.md) in the above example defines behaviors for [onDelete(perform:)](dynamicviewcontent/ondelete%28perform_%29.md) and [onMove(perform:)](dynamicviewcontent/onmove%28perform_%29.md), the editable list displays the delete and move UI when the user taps Edit. Notice that the Edit button displays the title “Done” while edit mode is active:

![A screenshot of an app with an Edit button in the navigation bar.](https://developer.apple.com/images/com.apple.SwiftUI/EditButton-1@2x.png)

You can also create custom views that react to changes in the edit mode state, as described in [EditMode](editmode.md).

## Topics

### Creating an edit button

- [init()](editbutton/init%28%29.md): Creates an Edit button instance.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Creating special-purpose buttons

- [PasteButton](pastebutton.md): A system button that reads items from the pasteboard and delivers it to a closure.
- [RenameButton](renamebutton.md): A button that triggers a standard rename action.
