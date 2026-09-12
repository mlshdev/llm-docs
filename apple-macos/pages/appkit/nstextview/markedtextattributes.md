> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/markedtextattributes](https://developer.apple.com/documentation/appkit/nstextview/markedtextattributes)

# markedTextAttributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The attributes used to draw marked text.

## Declaration

```swift
var markedTextAttributes: [NSAttributedString.Key : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Text color, background color, and underline are the only supported attributes for marked text.

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
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertion(at:)](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates()](updatecandidates%28%29.md)

# markedTextAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The attributes used to draw marked text.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * markedTextAttributes;
```

<a id="Discussion"></a>

## Discussion

Text color, background color, and underline are the only supported attributes for marked text.

## See Also

### Related Documentation

- [markedRange](../nstextinput/markedrange.md): Deprecated. Returns the range of the marked text.

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
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertionAtPoint:](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates](updatecandidates%28%29.md)
