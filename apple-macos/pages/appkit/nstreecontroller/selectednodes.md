> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/selectednodes](https://developer.apple.com/documentation/appkit/nstreecontroller/selectednodes)

# selectedNodes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing the tree controller’s selected tree nodes.

## Declaration

```swift
var selectedNodes: [NSTreeNode] { get }
```

## See Also

### Getting the current selection

- [setSelectionIndexPath(\_:)](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths(\_:)](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.

# selectedNodes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing the tree controller’s selected tree nodes.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTreeNode *> * selectedNodes;
```

## See Also

### Getting the current selection

- [setSelectionIndexPath:](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths:](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
