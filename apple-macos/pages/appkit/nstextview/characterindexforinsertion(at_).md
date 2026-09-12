> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/characterindexforinsertion(at:)](https://developer.apple.com/documentation/appkit/nstextview/characterindexforinsertion(at:))

# characterIndexForInsertion(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.

## Declaration

```swift
func characterIndexForInsertion(at point: NSPoint) -> Int
```

## Parameters

- `point`: The point for which to return an index, in view coordinates.

<a id="return-value"></a>

## Return Value

The character index for the insertion point.

<a id="Discussion"></a>

## Discussion

This method should be used for insertion points associated with mouse clicks, drag events, and so forth. For other purposes, it is better to use `NSLayoutManager` methods.

The `NSTextInput` method [characterIndexForPoint:](../nstextinput/characterindexforpoint_.md) is not suitable for this role; it is intended only for uses related to text input methods.

## See Also

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange(\_:)](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange(\_:affinity:stillSelecting:)](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges(\_:affinity:stillSelecting:)](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer(\_:)](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [updateCandidates()](updatecandidates%28%29.md)

# characterIndexForInsertionAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.

## Declaration

```objectivec
- (NSUInteger) characterIndexForInsertionAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point for which to return an index, in view coordinates.

<a id="return-value"></a>

## Return Value

The character index for the insertion point.

<a id="Discussion"></a>

## Discussion

This method should be used for insertion points associated with mouse clicks, drag events, and so forth. For other purposes, it is better to use `NSLayoutManager` methods.

The `NSTextInput` method [characterIndexForPoint:](../nstextinput/characterindexforpoint_.md) is not suitable for this role; it is intended only for uses related to text input methods.

## See Also

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange:](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange:affinity:stillSelecting:](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges:affinity:stillSelecting:](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer:](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [updateCandidates](updatecandidates%28%29.md)
