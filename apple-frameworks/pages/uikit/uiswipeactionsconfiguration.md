> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipeactionsconfiguration](https://developer.apple.com/documentation/uikit/uiswipeactionsconfiguration)

# UISwipeActionsConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The set of actions to perform when swiping on rows of a table.

## Declaration

```swift
@MainActor class UISwipeActionsConfiguration
```

<a id="overview"></a>

## Overview

Create a [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) object to associate custom swipe actions with a row of your table view. Users swipe horizontally left or right in a table view to reveal the actions associated with a row. Each swipe-actions object contains the set of actions to display for each type of swipe.

To add custom actions to your table view’s rows, implement the [tableView(\_:leadingSwipeActionsConfigurationForRowAt:)](uitableviewdelegate/tableview%28__leadingswipeactionsconfigurationforrowat_%29.md) or [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](uitableviewdelegate/tableview%28__trailingswipeactionsconfigurationforrowat_%29.md) method of your table view’s delegate. In those methods, create and return the actions for the indicated row. The table displays your action buttons and executes the appropriate handler block when the user taps one of them.

## Topics

### Initializing the swipe actions

- [init(actions:)](uiswipeactionsconfiguration/init%28actions_%29.md): Creates a swipe action configuration object with the specified set of actions.

### Getting the swipe action information

- [actions](uiswipeactionsconfiguration/actions.md): The swipe actions.
- [performsFirstActionWithFullSwipe](uiswipeactionsconfiguration/performsfirstactionwithfullswipe.md): A Boolean value indicating whether a full swipe automatically performs the first action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Row actions

- [UIContextualAction](uicontextualaction.md): An action to display when the user swipes a table row.
- [UITableViewRowAction](uitableviewrowaction.md): Deprecated. A single action to present when the user swipes horizontally in a table row.

# UISwipeActionsConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The set of actions to perform when swiping on rows of a table.

## Declaration

```objectivec
@interface UISwipeActionsConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create a [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) object to associate custom swipe actions with a row of your table view. Users swipe horizontally left or right in a table view to reveal the actions associated with a row. Each swipe-actions object contains the set of actions to display for each type of swipe.

To add custom actions to your table view’s rows, implement the [tableView:leadingSwipeActionsConfigurationForRowAtIndexPath:](uitableviewdelegate/tableview%28__leadingswipeactionsconfigurationforrowat_%29.md) or [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](uitableviewdelegate/tableview%28__trailingswipeactionsconfigurationforrowat_%29.md) method of your table view’s delegate. In those methods, create and return the actions for the indicated row. The table displays your action buttons and executes the appropriate handler block when the user taps one of them.

## Topics

### Initializing the swipe actions

- [configurationWithActions:](uiswipeactionsconfiguration/init%28actions_%29.md): Creates a swipe action configuration object with the specified set of actions.

### Getting the swipe action information

- [actions](uiswipeactionsconfiguration/actions.md): The swipe actions.
- [performsFirstActionWithFullSwipe](uiswipeactionsconfiguration/performsfirstactionwithfullswipe.md): A Boolean value indicating whether a full swipe automatically performs the first action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Row actions

- [UIContextualAction](uicontextualaction.md): An action to display when the user swipes a table row.
- [UITableViewRowAction](uitableviewrowaction.md): Deprecated. A single action to present when the user swipes horizontally in a table row.
