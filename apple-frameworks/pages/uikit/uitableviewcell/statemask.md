> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/statemask](https://developer.apple.com/documentation/uikit/uitableviewcell/statemask)

# UITableViewCell.StateMask (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants used to determine the new state of a cell as it transitions between states.

## Declaration

```swift
struct StateMask
```

<a id="overview"></a>

## Overview

The methods that use these constants are [didTransition(to:)](didtransition%28to_%29.md) and [willTransition(to:)](willtransition%28to_%29.md).

## Topics

### Constants

- [showingEditControl](statemask/showingeditcontrol.md): The state of a table view cell when the table view is in editing mode.
- [showingDeleteConfirmation](statemask/showingdeleteconfirmation.md): The state of a table view cell that shows a button requesting confirmation of a delete gesture.

### Initializers

- [init(rawValue:)](statemask/init%28rawvalue_%29.md): Creates a state mask with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Adjusting to state transitions

- [willTransition(to:)](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransition(to:)](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.

# UITableViewCellStateMask (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants used to determine the new state of a cell as it transitions between states.

## Declaration

```objectivec
enum UITableViewCellStateMask : NSUInteger;
```

<a id="overview"></a>

## Overview

The methods that use these constants are [didTransitionToState:](didtransition%28to_%29.md) and [willTransitionToState:](willtransition%28to_%29.md).

## Topics

### Constants

- [UITableViewCellStateDefaultMask](../uitableviewcellstatemask/uitableviewcellstatedefaultmask.md): The normal state of a table cell.
- [UITableViewCellStateShowingEditControlMask](statemask/showingeditcontrol.md): The state of a table view cell when the table view is in editing mode.
- [UITableViewCellStateShowingDeleteConfirmationMask](statemask/showingdeleteconfirmation.md): The state of a table view cell that shows a button requesting confirmation of a delete gesture.

## See Also

### Adjusting to state transitions

- [willTransitionToState:](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransitionToState:](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.
