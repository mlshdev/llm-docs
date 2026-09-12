> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/drag-and-drop](https://developer.apple.com/documentation/swiftui/drag-and-drop)

# Drag and drop

**Framework:** SwiftUI  
**Kind:** API Collection

Enable people to move or duplicate items by dragging them from one location to another.

<a id="Overview"></a>

## Overview

Drag and drop offers people a convenient way to move content from one part of your app to another, from one app to another, or to reorder content using an intuitive dragging gesture. Support this feature in your app by adding view modifiers to potential source and destination views within your app’s interface.

![](https://developer.apple.com/images/com.apple.SwiftUI/drag-and-drop-hero@2x.png)

In your modifiers, provide or accept types that conform to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol, or that conform to [NSItemProviderReading](https://developer.apple.com/documentation/foundation/nsitemproviderreading) and/or [NSItemProviderWriting](https://developer.apple.com/documentation/foundation/nsitemproviderwriting). In Swift, prefer using transferable items.

For design guidance, see [Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop) in the Human Interface Guidelines.

## Topics

### Essentials

- [Adopting drag and drop using SwiftUI](adopting-drag-and-drop-using-swiftui.md): Enable drag-and-drop interactions in lists, tables and custom views.
- [Making a view into a drag source](making-a-view-into-a-drag-source.md): Adopt draggable API to provide items for drag-and-drop operations.
- [Reordering items in lists, stacks, grids, and custom layouts](reordering-items-in-lists-stacks-grids-and-custom-layouts.md): Add drag-to-reorder interactions to SwiftUI layouts using reordering modifiers.

### Configuring drag-and-drop behavior

- [dragConfiguration(\_:)](view/dragconfiguration%28__%29.md): Configures a drag session.
- [DragConfiguration](dragconfiguration.md): The behavior of the drag, proposed by the dragging source. A value that describes the drag operations a drag source supports.
- [dropConfiguration(\_:)](view/dropconfiguration%28__%29.md): Configures a drop session.
- [DropConfiguration](dropconfiguration.md): Describes the behavior of the drop.
- [dragContainer(for:in:\_:)](view/dragcontainer%28for_in___%29.md): A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:\_:)](view/dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
- [dragContainerSelection(\_:containerNamespace:)](view/dragcontainerselection%28__containernamespace_%29.md): Provides multiple item selection support for drag containers.

### Moving items

- [DragSession](dragsession.md): Describes the ongoing dragging session.
- [DropSession](dropsession.md)

### Moving transferable items

- [draggable(\_:)](view/draggable%28__%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:preview:)](view/draggable%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:containerNamespace:\_:)](view/draggable%28__containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:containerNamespace:\_:)](view/draggable%28__id_containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:item:containerNamespace:)](view/draggable%28__id_item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:item:containerNamespace:)](view/draggable%28__item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(containerItemID:containerNamespace:)](view/draggable%28containeritemid_containernamespace_%29.md): Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.

### Moving items using item providers

- [itemProvider(\_:)](view/itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
- [onDrag(\_:preview:)](view/ondrag%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [onDrag(\_:)](view/ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](view/ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onDrop(of:delegate:)](view/ondrop%28of_delegate_%29.md): Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.
- [DropDelegate](dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](dropproposal.md): The behavior of a drop.
- [DropOperation](dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
- [DropInfo](dropinfo.md): The current state of a drop.

### Reordering items

- [Making a card game with drag, drop, and reordering in SwiftUI](making-a-card-game-with-drag-drop-and-reordering-in-swiftui.md): Move cards between positions in a card game using drag, drop, and reordering modifiers.
- [reorderable()](dynamicviewcontent/reorderable%28%29.md): Enables reordering of views from this content inside the scope of a reorderable container modifier.
- [reorderable(collectionID:)](dynamicviewcontent/reorderable%28collectionid_%29.md): Enables reordering views from this content within and between sections in the scope of a reorderable container modifier.
- [ReorderableSingleCollectionIdentifier](reorderablesinglecollectionidentifier.md): An opaque, empty type used to identify reorderable containers and modifiers with only a single collection.
- [reorderContainer(for:isEnabled:move:)](view/reordercontainer%28for_isenabled_move_%29.md): Defines a container of reorderable views.
- [reorderContainer(for:in:isEnabled:move:)](view/reordercontainer%28for_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type you specify to identify sections.
- [reorderContainer(for:itemID:isEnabled:move:)](view/reordercontainer%28for_itemid_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you specify to identify items.
- [reorderContainer(for:itemID:in:isEnabled:move:)](view/reordercontainer%28for_itemid_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you use to identify items and a type you use to identify collections.
- [reorderDestination(for:in:)](dropsession/reorderdestination%28for_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [reorderDestination(for:itemID:in:)](dropsession/reorderdestination%28for_itemid_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [ReorderDifference](reorderdifference.md): The difference that a reordering operation produces.

### Describing preview formations

- [dragPreviewsFormation(\_:)](view/dragpreviewsformation%28__%29.md): Describes the way dragged previews are visually composed.
- [dropPreviewsFormation(\_:)](view/droppreviewsformation%28__%29.md): Describes the way previews for a drop are composed.
- [DragDropPreviewsFormation](dragdroppreviewsformation.md): On macOS, describes the way the dragged previews are visually composed. Both drag sources and drop destination can specify their desired preview formation.

### Configuring spring loading

- [springLoadingBehavior(\_:)](view/springloadingbehavior%28__%29.md): Sets the spring loading behavior this view.
- [springLoadingBehavior](environmentvalues/springloadingbehavior.md): The behavior of spring loaded interactions for the views associated with this environment.
- [SpringLoadingBehavior](springloadingbehavior.md): The options for controlling the spring loading behavior of views.

## See Also

### Event handling

- [Gestures](gestures.md): Define interactions from taps, clicks, and swipes to fine-grained gestures.
- [Input events](input-events.md): Respond to input from a hardware device, like a keyboard or a Touch Bar.
- [Clipboard](clipboard.md): Enable people to move or duplicate items by issuing Copy and Paste commands.
- [Focus](focus.md): Identify and control which visible object responds to user interaction.
- [System events](system-events.md): React to system events, like opening a URL.
