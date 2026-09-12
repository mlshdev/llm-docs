> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/selectedobjects](https://developer.apple.com/documentation/appkit/nstreecontroller/selectedobjects)

# selectedObjects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the currently selected objects in the tree controller’s content.

## Declaration

```swift
var selectedObjects: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath(\_:)](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths(\_:)](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.

# selectedObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the currently selected objects in the tree controller’s content.

## Declaration

```objectivec
@property (copy, readonly) NSArray * selectedObjects;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath:](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths:](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.
