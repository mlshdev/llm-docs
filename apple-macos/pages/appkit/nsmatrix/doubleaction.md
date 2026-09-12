> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/doubleaction](https://developer.apple.com/documentation/appkit/nsmatrix/doubleaction)

# doubleAction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action sent to the target of the receiver when the user double-clicks a cell.

## Declaration

```swift
var doubleAction: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

The double-click action of an [NSMatrix](../nsmatrix.md) is sent after the appropriate single-click action (for the [NSCell](../nscell.md) clicked, or for the [NSMatrix](../nsmatrix.md) if the [NSCell](../nscell.md) doesn’t have its own action). If there is no double-click action and the [NSMatrix](../nsmatrix.md) doesn’t ignore multiple clicks, the single-click action is sent twice. If the value of this property is a non-`nil` selector, this property also sets `ignoresMultiClick` to [false](https://developer.apple.com/documentation/swift/false); otherwise, it leaves `ignoresMultiClick` unchanged.

## See Also

### Related Documentation

- [action](../nscontrol/action.md): The default action-message selector associated with the control.
- [ignoresMultiClick](../nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.
- [target](../nscontrol/target.md): The target object that receives action messages from the cell.

### Managing and Sending Action Messages

- [sendAction()](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction(\_:to:forAllCells:)](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [sendDoubleAction()](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

# doubleAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action sent to the target of the receiver when the user double-clicks a cell.

## Declaration

```objectivec
@property (nullable) SEL doubleAction;
```

<a id="Discussion"></a>

## Discussion

The double-click action of an [NSMatrix](../nsmatrix.md) is sent after the appropriate single-click action (for the [NSCell](../nscell.md) clicked, or for the [NSMatrix](../nsmatrix.md) if the [NSCell](../nscell.md) doesn’t have its own action). If there is no double-click action and the [NSMatrix](../nsmatrix.md) doesn’t ignore multiple clicks, the single-click action is sent twice. If the value of this property is a non-`nil` selector, this property also sets `ignoresMultiClick` to [false](https://developer.apple.com/documentation/swift/false); otherwise, it leaves `ignoresMultiClick` unchanged.

## See Also

### Related Documentation

- [action](../nscontrol/action.md): The default action-message selector associated with the control.
- [ignoresMultiClick](../nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.
- [target](../nscontrol/target.md): The target object that receives action messages from the cell.

### Managing and Sending Action Messages

- [sendAction](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction:to:forAllCells:](sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [sendDoubleAction](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.
