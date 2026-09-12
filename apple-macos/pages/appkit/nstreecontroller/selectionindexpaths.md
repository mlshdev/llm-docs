> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/selectionindexpaths](https://developer.apple.com/documentation/appkit/nstreecontroller/selectionindexpaths)

# selectionIndexPaths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the index paths of the currently selected objects.

## Declaration

```swift
var selectionIndexPaths: [IndexPath] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array containing [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects for each of the selected objects in the tree controller’s content. This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath(\_:)](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths(\_:)](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.

# selectionIndexPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the index paths of the currently selected objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSIndexPath *> * selectionIndexPaths;
```

<a id="Discussion"></a>

## Discussion

This property contains an array containing [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects for each of the selected objects in the tree controller’s content. This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath:](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths:](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.
