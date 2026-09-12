> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/updateinsertionpointstateandrestarttimer(_:)](https://developer.apple.com/documentation/appkit/nstextview/updateinsertionpointstateandrestarttimer(_:))

# updateInsertionPointStateAndRestartTimer(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the insertion point’s location and optionally restarts the blinking cursor timer.

## Declaration

```swift
func updateInsertionPointStateAndRestartTimer(_ restartFlag: Bool)
```

## Parameters

- `restartFlag`: [true](https://developer.apple.com/documentation/swift/true) to restart the blinking cursor timer, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically whenever the insertion point needs to be moved; you should never need to invoke it directly, but you can override it to modify insertion point behavior.

## See Also

### Related Documentation

- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange(\_:)](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange(\_:affinity:stillSelecting:)](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges(\_:affinity:stillSelecting:)](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertion(at:)](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates()](updatecandidates%28%29.md)

# updateInsertionPointStateAndRestartTimer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the insertion point’s location and optionally restarts the blinking cursor timer.

## Declaration

```objectivec
- (void) updateInsertionPointStateAndRestartTimer:(BOOL) restartFlag;
```

## Parameters

- `restartFlag`: [true](https://developer.apple.com/documentation/swift/true) to restart the blinking cursor timer, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically whenever the insertion point needs to be moved; you should never need to invoke it directly, but you can override it to modify insertion point behavior.

## See Also

### Related Documentation

- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange:](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange:affinity:stillSelecting:](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges:affinity:stillSelecting:](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertionAtPoint:](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates](updatecandidates%28%29.md)
