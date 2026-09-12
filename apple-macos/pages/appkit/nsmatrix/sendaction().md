> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/sendaction()](https://developer.apple.com/documentation/appkit/nsmatrix/sendaction())

# sendAction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If the selected cell has both an action and a target, sends its action to its target.

## Declaration

```swift
func sendAction() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an action was successfully sent to a target. If the selected cell is disabled, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the cell has an action but no target, its action is sent to the target of the receiver. If the cell doesn’t have an action, or if there is no selected cell, the receiver sends its own action to its target.

## See Also

### Related Documentation

- [action](../nscell/action.md): The action performed by the cell.
- [target](../nscell/target.md): The object that receives the cell’s action messages.

### Managing and Sending Action Messages

- [sendAction(\_:to:forAllCells:)](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.
- [sendDoubleAction()](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

# sendAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If the selected cell has both an action and a target, sends its action to its target.

## Declaration

```objectivec
- (BOOL) sendAction;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an action was successfully sent to a target. If the selected cell is disabled, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the cell has an action but no target, its action is sent to the target of the receiver. If the cell doesn’t have an action, or if there is no selected cell, the receiver sends its own action to its target.

## See Also

### Related Documentation

- [action](../nscell/action.md): The action performed by the cell.
- [target](../nscell/target.md): The object that receives the cell’s action messages.

### Managing and Sending Action Messages

- [sendAction:to:forAllCells:](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.
- [sendDoubleAction](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.
