> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/selectionaffinity](https://developer.apple.com/documentation/appkit/nstextview/selectionaffinity)

# selectionAffinity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The preferred direction of selection.

## Declaration

```swift
var selectionAffinity: NSSelectionAffinity { get }
```

<a id="Discussion"></a>

## Discussion

Selection affinity determines whether, for example, the insertion point appears after the last character on a line or before the first character on the following line in cases where text wraps across line boundaries.

## See Also

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange(\_:)](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange(\_:affinity:stillSelecting:)](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges(\_:affinity:stillSelecting:)](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer(\_:)](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertion(at:)](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates()](updatecandidates%28%29.md)

# selectionAffinity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The preferred direction of selection.

## Declaration

```objectivec
@property (readonly) NSSelectionAffinity selectionAffinity;
```

<a id="Discussion"></a>

## Discussion

Selection affinity determines whether, for example, the insertion point appears after the last character on a line or before the first character on the following line in cases where text wraps across line boundaries.

## See Also

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange:](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange:affinity:stillSelecting:](setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges:affinity:stillSelecting:](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer:](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertionAtPoint:](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates](updatecandidates%28%29.md)
