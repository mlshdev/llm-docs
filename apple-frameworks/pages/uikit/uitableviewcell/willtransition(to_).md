> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/willtransition(to:)](https://developer.apple.com/documentation/uikit/uitableviewcell/willtransition(to:))

# willTransition(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the cell that it’s about to transition to a new cell state.

## Declaration

```swift
func willTransition(to state: UITableViewCell.StateMask)
```

## Parameters

- `state`: A bit mask indicating the state or combination of states the cell is transitioning to.

<a id="Discussion"></a>

## Discussion

Subclasses of `UITableViewCell` can implement this method to animate additional changes to a cell when it is changing state. `UITableViewCell` calls this method whenever a cell transitions between states, such as from a normal state (the default) to editing mode. The custom cell can set up and position any new views that appear with the new state. The cell then receives a [layoutSubviews()](../uiview/layoutsubviews%28%29.md) message (`UIView`) in which it can position these new views in their final locations for the new state. Subclasses must always call `super` when overriding this method.

Note that when the user swipes a cell to delete it, the cell transitions to the state identified by the [showingDeleteConfirmation](statemask/showingdeleteconfirmation.md) constant but the [showingEditControl](statemask/showingeditcontrol.md) is not set.

## See Also

### Related Documentation

- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.

### Adjusting to state transitions

- [didTransition(to:)](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.
- [UITableViewCell.StateMask](statemask.md): Constants used to determine the new state of a cell as it transitions between states.

# willTransitionToState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the cell that it’s about to transition to a new cell state.

## Declaration

```objectivec
- (void) willTransitionToState:(UITableViewCellStateMask) state;
```

## Parameters

- `state`: A bit mask indicating the state or combination of states the cell is transitioning to.

<a id="Discussion"></a>

## Discussion

Subclasses of `UITableViewCell` can implement this method to animate additional changes to a cell when it is changing state. `UITableViewCell` calls this method whenever a cell transitions between states, such as from a normal state (the default) to editing mode. The custom cell can set up and position any new views that appear with the new state. The cell then receives a [layoutSubviews](../uiview/layoutsubviews%28%29.md) message (`UIView`) in which it can position these new views in their final locations for the new state. Subclasses must always call `super` when overriding this method.

Note that when the user swipes a cell to delete it, the cell transitions to the state identified by the [UITableViewCellStateShowingDeleteConfirmationMask](statemask/showingdeleteconfirmation.md) constant but the [UITableViewCellStateShowingEditControlMask](statemask/showingeditcontrol.md) is not set.

## See Also

### Related Documentation

- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.

### Adjusting to state transitions

- [didTransitionToState:](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.
- [UITableViewCellStateMask](statemask.md): Constants used to determine the new state of a cell as it transitions between states.
