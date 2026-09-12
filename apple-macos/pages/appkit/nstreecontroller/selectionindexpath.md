> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/selectionindexpath](https://developer.apple.com/documentation/appkit/nstreecontroller/selectionindexpath)

# selectionIndexPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index path of the first selected object.

## Declaration

```swift
var selectionIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no selection. This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath(\_:)](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [setSelectionIndexPaths(\_:)](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.

# selectionIndexPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index path of the first selected object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSIndexPath * selectionIndexPath;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no selection. This property is observable using key-value observing.

## See Also

### Getting the current selection

- [setSelectionIndexPath:](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [setSelectionIndexPaths:](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.
