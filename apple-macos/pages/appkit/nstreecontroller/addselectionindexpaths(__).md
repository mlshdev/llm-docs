> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/addselectionindexpaths(_:)](https://developer.apple.com/documentation/appkit/nstreecontroller/addselectionindexpaths(_:))

# addSelectionIndexPaths(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.

## Declaration

```swift
func addSelectionIndexPaths(_ indexPaths: [IndexPath]) -> Bool
```

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Managing Selections

- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [removeSelectionIndexPaths(\_:)](removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.

# addSelectionIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.

## Declaration

```objectivec
- (BOOL) addSelectionIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a `commitEditing` message which fails, thus denying the selection change.

## See Also

### Managing Selections

- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [removeSelectionIndexPaths:](removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.
