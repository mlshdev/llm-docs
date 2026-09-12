> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/setselectionindexpaths(_:)](https://developer.apple.com/documentation/appkit/nstreecontroller/setselectionindexpaths(_:))

# setSelectionIndexPaths(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tree controller’s current selection to the specified index paths.

## Declaration

```swift
func setSelectionIndexPaths(_ indexPaths: [IndexPath]) -> Bool
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects specifying the selected objects.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) if the selection has changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Getting the current selection

- [setSelectionIndexPath(\_:)](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.

# setSelectionIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tree controller’s current selection to the specified index paths.

## Declaration

```objectivec
- (BOOL) setSelectionIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects specifying the selected objects.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) if the selection has changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Getting the current selection

- [setSelectionIndexPath:](setselectionindexpath%28__%29.md): Sets the tree controller’s current selection.
- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.
