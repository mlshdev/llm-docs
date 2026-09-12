> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller](https://developer.apple.com/documentation/appkit/nstreecontroller)

# NSTreeController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A bindings-compatible controller that manages a tree of objects.

## Declaration

```swift
class NSTreeController
```

<a id="overview"></a>

## Overview

The [NSTreeController](nstreecontroller.md) class provides selection and sort management. Its primary purpose is to act as the controller when binding [NSOutlineView](nsoutlineview.md) and [NSBrowser](nsbrowser.md) instances to a hierarchical collection of objects. The root content object of the tree can be a single object, or an array of objects.

An [NSTreeController](nstreecontroller.md) object requires that you describe how the tree of objects is traversed by specifying the key-path for child objects specified by [childrenKeyPath](nstreecontroller/childrenkeypath.md). All child objects for the tree must be key-value coding compliant for the same child key path. If necessary, you should add properties to your model classes that map the child key name to the appropriate class-specific property name.

Child objects can implement a count method (specified to the tree controller using [countKeyPath](nstreecontroller/countkeypath.md)) that, if provided, returns the number of child objects available. Your model objects are expected to update the value of the count key path in a key-value observing compliant method. Optionally, you can also provide a leaf key path using [leafKeyPath](nstreecontroller/leafkeypath.md) that specifies a key in your model object that returns [true](https://developer.apple.com/documentation/swift/true) if the object is a leaf node, and [false](https://developer.apple.com/documentation/swift/false) if it is not. Changes to the leaf node value of the child object should be made in a key-value observing compliant manner. Providing the leaf node key path can improve performance, because it prevents the [NSTreeController](nstreecontroller.md) from having to examine the child object to determine if it is a leaf node.

For more information about using NSTreeController in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

## Topics

### Managing Sort Descriptors

- [sortDescriptors](nstreecontroller/sortdescriptors.md): An array containing the sort descriptors used to arrange the tree controller’s content.

### Setting the content

- [content](nstreecontroller/content.md): The tree controller’s content object.

### Arranging Objects

- [arrangedObjects](nstreecontroller/arrangedobjects.md): The tree controller’s sorted content objects.
- [rearrangeObjects()](nstreecontroller/rearrangeobjects%28%29.md): Use this method to trigger reordering of the tree controller’s content.

### Getting the current selection

- [setSelectionIndexPath(\_:)](nstreecontroller/setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](nstreecontroller/selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths(\_:)](nstreecontroller/setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](nstreecontroller/selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](nstreecontroller/selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](nstreecontroller/selectednodes.md): An array containing the tree controller’s selected tree nodes.

### Managing Selections

- [selectsInsertedObjects](nstreecontroller/selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [addSelectionIndexPaths(\_:)](nstreecontroller/addselectionindexpaths%28__%29.md): Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.
- [removeSelectionIndexPaths(\_:)](nstreecontroller/removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](nstreecontroller/avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](nstreecontroller/preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.
- [alwaysUsesMultipleValuesMarker](nstreecontroller/alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.

### Adding, inserting and removing objects

- [add(\_:)](nstreecontroller/add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild(\_:)](nstreecontroller/addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](nstreecontroller/canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](nstreecontroller/caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](nstreecontroller/caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insert(\_:)](nstreecontroller/insert%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.
- [insertChild(\_:)](nstreecontroller/insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insert(\_:atArrangedObjectIndexPath:)](nstreecontroller/insert%28__atarrangedobjectindexpath_%29.md): Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.
- [insert(\_:atArrangedObjectIndexPaths:)](nstreecontroller/insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove(\_:)](nstreecontroller/remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObject(atArrangedObjectIndexPath:)](nstreecontroller/removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjects(atArrangedObjectIndexPaths:)](nstreecontroller/removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [move(\_:to:)](nstreecontroller/move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [move(\_:to:)](nstreecontroller/move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

### Specifying model attributes

- [childrenKeyPath](nstreecontroller/childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPath(for:)](nstreecontroller/childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](nstreecontroller/countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPath(for:)](nstreecontroller/countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](nstreecontroller/leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPath(for:)](nstreecontroller/leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.

## Relationships

### Inherits From

- [NSObjectController](nsobjectcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tree-Based Data

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.
- [NSTreeNode](nstreenode.md): A node in a tree of nodes.

# NSTreeController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A bindings-compatible controller that manages a tree of objects.

## Declaration

```objectivec
@interface NSTreeController : NSObjectController
```

<a id="overview"></a>

## Overview

The [NSTreeController](nstreecontroller.md) class provides selection and sort management. Its primary purpose is to act as the controller when binding [NSOutlineView](nsoutlineview.md) and [NSBrowser](nsbrowser.md) instances to a hierarchical collection of objects. The root content object of the tree can be a single object, or an array of objects.

An [NSTreeController](nstreecontroller.md) object requires that you describe how the tree of objects is traversed by specifying the key-path for child objects specified by [childrenKeyPath](nstreecontroller/childrenkeypath.md). All child objects for the tree must be key-value coding compliant for the same child key path. If necessary, you should add properties to your model classes that map the child key name to the appropriate class-specific property name.

Child objects can implement a count method (specified to the tree controller using [countKeyPath](nstreecontroller/countkeypath.md)) that, if provided, returns the number of child objects available. Your model objects are expected to update the value of the count key path in a key-value observing compliant method. Optionally, you can also provide a leaf key path using [leafKeyPath](nstreecontroller/leafkeypath.md) that specifies a key in your model object that returns [true](https://developer.apple.com/documentation/swift/true) if the object is a leaf node, and [false](https://developer.apple.com/documentation/swift/false) if it is not. Changes to the leaf node value of the child object should be made in a key-value observing compliant manner. Providing the leaf node key path can improve performance, because it prevents the [NSTreeController](nstreecontroller.md) from having to examine the child object to determine if it is a leaf node.

For more information about using NSTreeController in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

## Topics

### Managing Sort Descriptors

- [sortDescriptors](nstreecontroller/sortdescriptors.md): An array containing the sort descriptors used to arrange the tree controller’s content.

### Setting the content

- [content](nstreecontroller/content.md): The tree controller’s content object.

### Arranging Objects

- [arrangedObjects](nstreecontroller/arrangedobjects.md): The tree controller’s sorted content objects.
- [rearrangeObjects](nstreecontroller/rearrangeobjects%28%29.md): Use this method to trigger reordering of the tree controller’s content.

### Getting the current selection

- [setSelectionIndexPath:](nstreecontroller/setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](nstreecontroller/selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths:](nstreecontroller/setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](nstreecontroller/selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](nstreecontroller/selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](nstreecontroller/selectednodes.md): An array containing the tree controller’s selected tree nodes.

### Managing Selections

- [selectsInsertedObjects](nstreecontroller/selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [addSelectionIndexPaths:](nstreecontroller/addselectionindexpaths%28__%29.md): Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.
- [removeSelectionIndexPaths:](nstreecontroller/removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](nstreecontroller/avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](nstreecontroller/preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.
- [alwaysUsesMultipleValuesMarker](nstreecontroller/alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.

### Adding, inserting and removing objects

- [add:](nstreecontroller/add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild:](nstreecontroller/addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](nstreecontroller/canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](nstreecontroller/caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](nstreecontroller/caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insert:](nstreecontroller/insert%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.
- [insertChild:](nstreecontroller/insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insertObject:atArrangedObjectIndexPath:](nstreecontroller/insert%28__atarrangedobjectindexpath_%29.md): Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.
- [insertObjects:atArrangedObjectIndexPaths:](nstreecontroller/insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove:](nstreecontroller/remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObjectAtArrangedObjectIndexPath:](nstreecontroller/removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjectsAtArrangedObjectIndexPaths:](nstreecontroller/removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [moveNode:toIndexPath:](nstreecontroller/move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [moveNodes:toIndexPath:](nstreecontroller/move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

### Specifying model attributes

- [childrenKeyPath](nstreecontroller/childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPathForNode:](nstreecontroller/childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](nstreecontroller/countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPathForNode:](nstreecontroller/countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](nstreecontroller/leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPathForNode:](nstreecontroller/leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.

## Relationships

### Inherits From

- [NSObjectController](nsobjectcontroller.md)

## See Also

### Tree-Based Data

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.
- [NSTreeNode](nstreenode.md): A node in a tree of nodes.
