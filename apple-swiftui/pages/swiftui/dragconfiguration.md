> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dragconfiguration](https://developer.apple.com/documentation/swiftui/dragconfiguration)

# DragConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The behavior of the drag, proposed by the dragging source. A value that describes the drag operations a drag source supports.

## Declaration

```swift
struct DragConfiguration
```

<a id="overview"></a>

## Overview

Pass a `DragConfiguration` to the [dragConfiguration(\_:)](view/dragconfiguration%28__%29.md) modifier to declare which operations — copy, move, or delete — a view supports when it is dragged.

<a id="Opting-in-to-move"></a>

### Opting in to move

By default, only copy is allowed. To support drag-to-move, where the source item is removed after a successful drop, initialize with `allowMove: true`:

```swift
.dragConfiguration(DragConfiguration(allowMove: true))
```

On macOS, users can override the proposed operation during a drag by holding modifier keys:

- **⌥ (Option)** proposes copy.
- **⌘ (Command)** proposes move.
- **⌥ + ⌘** proposes alias.

Modifier keys only take effect when the source supports the corresponding operation. For example, holding ⌘ has no effect unless `allowMove` is `true`.

<a id="Responding-to-the-performed-operation"></a>

### Responding to the performed operation

`DragConfiguration` communicates *suggested* operations to drop destinations, but each destination chooses which operation to perform. To detect which operation was ultimately performed — for example, to remove the source item after a successful move — observe the drag session using [onDragSessionUpdated(\_:)](view/ondragsessionupdated%28__%29.md):

```swift
.dragConfiguration(DragConfiguration(allowMove: true))
.onDragSessionUpdated { session in
    if session.phase == .ended(.move) {
        removeItem()
    }
}
```

> **See Also**

> [dragConfiguration(\_:)](view/dragconfiguration%28__%29.md), [onDragSessionUpdated(\_:)](view/ondragsessionupdated%28__%29.md), [suggestedOperations](dropsession/suggestedoperations.md)

## Topics

### Structures

- [DragConfiguration.OperationsOutsideApp](dragconfiguration/operationsoutsideapp-swift.struct.md): Describes the suggested drag operations to other applications.
- [DragConfiguration.OperationsWithinApp](dragconfiguration/operationswithinapp-swift.struct.md): Describes the drag operations suggested to destinations within the app.

### Initializers

- [init(allowMove:)](dragconfiguration/init%28allowmove_%29.md): Creates a drag configuration that can support drag-to-move in addition to drag-to-copy.
- [init(allowMove:allowDelete:)](dragconfiguration/init%28allowmove_allowdelete_%29.md): Creates a drag configuration that can support drag-to-move and drag-to-delete in addition to drag-to-copy.
- [init(operationsWithinApp:operationsOutsideApp:)](dragconfiguration/init%28operationswithinapp_operationsoutsideapp_%29.md): Creates a default drag configuration with operation `.copy` support for drags within the application and to other applications.

### Instance Properties

- [operationsOutsideApp](dragconfiguration/operationsoutsideapp-swift.property.md): The operations suggested by the drag source for drags to other applications.
- [operationsWithinApp](dragconfiguration/operationswithinapp-swift.property.md): The operations suggested by the drag source for drags within the application.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Configuring drag-and-drop behavior

- [dragConfiguration(\_:)](view/dragconfiguration%28__%29.md): Configures a drag session.
- [dropConfiguration(\_:)](view/dropconfiguration%28__%29.md): Configures a drop session.
- [DropConfiguration](dropconfiguration.md): Describes the behavior of the drop.
- [dragContainer(for:in:\_:)](view/dragcontainer%28for_in___%29.md): A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:\_:)](view/dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
- [dragContainerSelection(\_:containerNamespace:)](view/dragcontainerselection%28__containernamespace_%29.md): Provides multiple item selection support for drag containers.
