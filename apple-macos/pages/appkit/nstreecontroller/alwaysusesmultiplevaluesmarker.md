> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/alwaysusesmultiplevaluesmarker](https://developer.apple.com/documentation/appkit/nstreecontroller/alwaysusesmultiplevaluesmarker)

# alwaysUsesMultipleValuesMarker (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.

## Declaration

```swift
var alwaysUsesMultipleValuesMarker: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) can increase performance if your application doesn’t allow editing multiple values. The default is [false](https://developer.apple.com/documentation/swift/false). This property is observable using key-value observing.

## See Also

### Managing Selections

- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [addSelectionIndexPaths(\_:)](addselectionindexpaths%28__%29.md): Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.
- [removeSelectionIndexPaths(\_:)](removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.

# alwaysUsesMultipleValuesMarker (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the tree controller always returns the multiple values marker when multiple objects are selected, even if the selected items have the same value.

## Declaration

```objectivec
@property BOOL alwaysUsesMultipleValuesMarker;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) can increase performance if your application doesn’t allow editing multiple values. The default is [false](https://developer.apple.com/documentation/swift/false). This property is observable using key-value observing.

## See Also

### Managing Selections

- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the tree controller automatically selects objects as they are inserted.
- [addSelectionIndexPaths:](addselectionindexpaths%28__%29.md): Adds the objects at the specified `indexPaths` in the tree controller’s content to the current selection.
- [removeSelectionIndexPaths:](removeselectionindexpaths%28__%29.md): Removes the objects at the specified index paths from the tree controller’s current selection.
- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the tree controller requires the content array to attempt to maintain a selection at all times, avoiding an empty selection.
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the tree controller will attempt to preserve the current selection when the content changes.
