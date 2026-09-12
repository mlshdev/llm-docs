> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/didtransition(to:)](https://developer.apple.com/documentation/uikit/uitableviewcell/didtransition(to:))

# didTransition(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the cell that it transitioned to a new cell state.

## Declaration

```swift
func didTransition(to state: UITableViewCell.StateMask)
```

## Parameters

- `state`: A bit mask indicating the state or combination of states the cell is transitioning to.

<a id="Discussion"></a>

## Discussion

Subclasses of `UITableViewCell` can implement this method to animate additional changes to a cell when it is changing state. `UITableViewCell` calls this method whenever a cell transitions between states, such as from a normal state (the default) to editing mode. This method is called at the end of the animation block, which gives the custom cell a chance to clean up after the state change—for example, removing the edit and reorder controls after transitioning out of editing.  Subclasses must always call `super` when overriding this method.

Note that when the user swipes a cell to delete it, the cell transitions to the state identified by the [showingDeleteConfirmation](statemask/showingdeleteconfirmation.md) constant but the [showingEditControl](statemask/showingeditcontrol.md) is not set.

## See Also

### Related Documentation

- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.

### Adjusting to state transitions

- [willTransition(to:)](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [UITableViewCell.StateMask](statemask.md): Constants used to determine the new state of a cell as it transitions between states.

# didTransitionToState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the cell that it transitioned to a new cell state.

## Declaration

```objectivec
- (void) didTransitionToState:(UITableViewCellStateMask) state;
```

## Parameters

- `state`: A bit mask indicating the state or combination of states the cell is transitioning to.

<a id="Discussion"></a>

## Discussion

Subclasses of `UITableViewCell` can implement this method to animate additional changes to a cell when it is changing state. `UITableViewCell` calls this method whenever a cell transitions between states, such as from a normal state (the default) to editing mode. This method is called at the end of the animation block, which gives the custom cell a chance to clean up after the state change—for example, removing the edit and reorder controls after transitioning out of editing.  Subclasses must always call `super` when overriding this method.

Note that when the user swipes a cell to delete it, the cell transitions to the state identified by the [UITableViewCellStateShowingDeleteConfirmationMask](statemask/showingdeleteconfirmation.md) constant but the [UITableViewCellStateShowingEditControlMask](statemask/showingeditcontrol.md) is not set.

## See Also

### Related Documentation

- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.

### Adjusting to state transitions

- [willTransitionToState:](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [UITableViewCellStateMask](statemask.md): Constants used to determine the new state of a cell as it transitions between states.
