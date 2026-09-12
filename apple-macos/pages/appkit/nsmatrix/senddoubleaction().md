> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/senddoubleaction()](https://developer.apple.com/documentation/appkit/nsmatrix/senddoubleaction())

# sendDoubleAction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the double-click action message to the target of the receiver.

## Declaration

```swift
func sendDoubleAction()
```

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t have a double-click action, the double-click action message of the selected cell (as returned by [selectedCell](selectedcell.md)) is sent to the selected cell’s target. Finally, if the selected cell also has no action, then the single-click action of the receiver is sent to the target of the receiver.

If the selected cell is disabled, this method does nothing.

Your code shouldn’t invoke this method; it’s sent in response to a double-click event in the [NSMatrix](../nsmatrix.md). Override it if you need to change the search order for an action to send.

## See Also

### Related Documentation

- [ignoresMultiClick](../nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

### Managing and Sending Action Messages

- [sendAction()](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction(\_:to:forAllCells:)](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.

# sendDoubleAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the double-click action message to the target of the receiver.

## Declaration

```objectivec
- (void) sendDoubleAction;
```

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t have a double-click action, the double-click action message of the selected cell (as returned by [selectedCell](selectedcell.md)) is sent to the selected cell’s target. Finally, if the selected cell also has no action, then the single-click action of the receiver is sent to the target of the receiver.

If the selected cell is disabled, this method does nothing.

Your code shouldn’t invoke this method; it’s sent in response to a double-click event in the [NSMatrix](../nsmatrix.md). Override it if you need to change the search order for an action to send.

## See Also

### Related Documentation

- [ignoresMultiClick](../nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

### Managing and Sending Action Messages

- [sendAction](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction:to:forAllCells:](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.
