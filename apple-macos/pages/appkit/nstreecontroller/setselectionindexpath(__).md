> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/setselectionindexpath(_:)](https://developer.apple.com/documentation/appkit/nstreecontroller/setselectionindexpath(_:))

# setSelectionIndexPath(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tree controller’s current selection.

## Declaration

```swift
func setSelectionIndexPath(_ indexPath: IndexPath?) -> Bool
```

## Parameters

- `indexPath`: The proposed new selection.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) if the selection has changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Getting the current selection

- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths(\_:)](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.

# setSelectionIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tree controller’s current selection.

## Declaration

```objectivec
- (BOOL) setSelectionIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The proposed new selection.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) if the selection has changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Getting the current selection

- [selectionIndexPath](selectionindexpath.md): The index path of the first selected object.
- [setSelectionIndexPaths:](setselectionindexpaths%28__%29.md): Sets the tree controller’s current selection to the specified index paths.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of the currently selected objects.
- [selectedObjects](selectedobjects.md): An array containing the currently selected objects in the tree controller’s content.
- [selectedNodes](selectednodes.md): An array containing the tree controller’s selected tree nodes.
