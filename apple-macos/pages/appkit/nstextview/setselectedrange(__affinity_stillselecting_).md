> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setselectedrange(_:affinity:stillselecting:)](https://developer.apple.com/documentation/appkit/nstextview/setselectedrange(_:affinity:stillselecting:))

# setSelectedRange(\_:affinity:stillSelecting:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selection to a range of characters in response to user action.

## Declaration

```swift
func setSelectedRange(_ charRange: NSRange, affinity: NSSelectionAffinity, stillSelecting stillSelectingFlag: Bool)
```

## Parameters

- `charRange`: The range of characters to select. This range must begin and end on glyph boundaries and not split base glyphs and their nonspacing marks.
- `affinity`: The selection affinity for the selection. See [selectionAffinity](selectionaffinity.md) for more information about how affinities work.
- `stillSelectingFlag`: [true](https://developer.apple.com/documentation/swift/true) to behave appropriately for a continuing selection where the user is still dragging the mouse, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [true](https://developer.apple.com/documentation/swift/true), the receiver doesn’t send notifications or remove the marking from its marked text. If [false](https://developer.apple.com/documentation/swift/false), the receiver posts an [didChangeSelectionNotification](didchangeselectionnotification.md) to the default notification center and removes the marking from marked text if the new selection is greater than the marked region.

<a id="Discussion"></a>

## Discussion

This method resets the selection granularity to `NSSelectByCharacter`.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.4 and later, if there are multiple selections, this method acts on the first selected subrange.

## See Also

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange(\_:)](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRanges(\_:affinity:stillSelecting:)](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer(\_:)](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertion(at:)](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates()](updatecandidates%28%29.md)

# setSelectedRange:affinity:stillSelecting: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selection to a range of characters in response to user action.

## Declaration

```objectivec
- (void) setSelectedRange:(NSRange) charRange affinity:(NSSelectionAffinity) affinity stillSelecting:(BOOL) stillSelectingFlag;
```

## Parameters

- `charRange`: The range of characters to select. This range must begin and end on glyph boundaries and not split base glyphs and their nonspacing marks.
- `affinity`: The selection affinity for the selection. See [selectionAffinity](selectionaffinity.md) for more information about how affinities work.
- `stillSelectingFlag`: [true](https://developer.apple.com/documentation/swift/true) to behave appropriately for a continuing selection where the user is still dragging the mouse, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [true](https://developer.apple.com/documentation/swift/true), the receiver doesn’t send notifications or remove the marking from its marked text. If [false](https://developer.apple.com/documentation/swift/false), the receiver posts an [NSTextViewDidChangeSelectionNotification](didchangeselectionnotification.md) to the default notification center and removes the marking from marked text if the new selection is greater than the marked region.

<a id="Discussion"></a>

## Discussion

This method resets the selection granularity to `NSSelectByCharacter`.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.4 and later, if there are multiple selections, this method acts on the first selected subrange.

## See Also

### Related Documentation

- [selectedRange](../nstextinput/selectedrange.md): Deprecated. Returns the range of selected text.

### Managing the selection

- [selectedRanges](selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange:](setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRanges:affinity:stillSelecting:](setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer:](updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertionAtPoint:](characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates](updatecandidates%28%29.md)
