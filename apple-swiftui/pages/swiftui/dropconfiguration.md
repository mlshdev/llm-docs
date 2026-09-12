> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropconfiguration](https://developer.apple.com/documentation/swiftui/dropconfiguration)

# DropConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Describes the behavior of the drop.

## Declaration

```swift
struct DropConfiguration
```

## Topics

### Initializers

- [init(operation:)](dropconfiguration/init%28operation_%29.md): Creates a configuration value with the operation chosen by the drop destination.
- [init(operation:destination:)](dropconfiguration/init%28operation_destination_%29.md): Creates a drop configuration with the provided operation and reorder destination.

### Instance Properties

- [acceptedItemCount](dropconfiguration/accepteditemcount.md): Specifies the number of items that the drop side wants to accept.
- [operation](dropconfiguration/operation.md): The drop operation that the drop chooses to perform.

## See Also

### Configuring drag-and-drop behavior

- [dragConfiguration(\_:)](view/dragconfiguration%28__%29.md): Configures a drag session.
- [DragConfiguration](dragconfiguration.md): The behavior of the drag, proposed by the dragging source. A value that describes the drag operations a drag source supports.
- [dropConfiguration(\_:)](view/dropconfiguration%28__%29.md): Configures a drop session.
- [dragContainer(for:in:\_:)](view/dragcontainer%28for_in___%29.md): A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:\_:)](view/dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
- [dragContainerSelection(\_:containerNamespace:)](view/dragcontainerselection%28__containernamespace_%29.md): Provides multiple item selection support for drag containers.
