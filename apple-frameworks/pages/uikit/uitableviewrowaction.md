> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewrowaction](https://developer.apple.com/documentation/uikit/uitableviewrowaction)

# UITableViewRowAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single action to present when the user swipes horizontally in a table row.

> Use [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) instead.

## Declaration

```swift
@MainActor class UITableViewRowAction
```

<a id="overview"></a>

## Overview

Create a [UITableViewRowAction](uitableviewrowaction.md) object to define a single, custom action for a table row. Users swipe horizontally in a table view to reveal the actions associated with a row. Each row-action object contains the text display, the action to perform, and any specific formatting to apply to that action.

To add custom actions to your table view’s rows, implement the [tableView(\_:editActionsForRowAt:)](uitableviewdelegate/tableview%28__editactionsforrowat_%29.md) method in your table view’s delegate object. In that method, create and return the actions for the indicated row. The table displays your action buttons and executes the appropriate handler block when the user taps one of them.

## Topics

### Creating a table row action

- [init(style:title:handler:)](uitableviewrowaction/init%28style_title_handler_%29.md): Deprecated. Creates and returns a new table view row action object.

### Configuring the action’s appearance

- [style](uitableviewrowaction/style-swift.property.md): Deprecated. The style applied to the action button.
- [UITableViewRowAction.Style](uitableviewrowaction/style-swift.enum.md): Deprecated. Constants that specify the appearance of action buttons.
- [title](uitableviewrowaction/title.md): Deprecated. The title of the action button.
- [backgroundColor](uitableviewrowaction/backgroundcolor.md): Deprecated. The background color of the action button.
- [backgroundEffect](uitableviewrowaction/backgroundeffect.md): Deprecated. The visual effect to apply to the button.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Row actions

- [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md): The set of actions to perform when swiping on rows of a table.
- [UIContextualAction](uicontextualaction.md): An action to display when the user swipes a table row.

# UITableViewRowAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single action to present when the user swipes horizontally in a table row.

> Use [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) instead.

## Declaration

```objectivec
@interface UITableViewRowAction : NSObject
```

<a id="overview"></a>

## Overview

Create a [UITableViewRowAction](uitableviewrowaction.md) object to define a single, custom action for a table row. Users swipe horizontally in a table view to reveal the actions associated with a row. Each row-action object contains the text display, the action to perform, and any specific formatting to apply to that action.

To add custom actions to your table view’s rows, implement the [tableView:editActionsForRowAtIndexPath:](uitableviewdelegate/tableview%28__editactionsforrowat_%29.md) method in your table view’s delegate object. In that method, create and return the actions for the indicated row. The table displays your action buttons and executes the appropriate handler block when the user taps one of them.

## Topics

### Creating a table row action

- [rowActionWithStyle:title:handler:](uitableviewrowaction/init%28style_title_handler_%29.md): Deprecated. Creates and returns a new table view row action object.

### Configuring the action’s appearance

- [style](uitableviewrowaction/style-swift.property.md): Deprecated. The style applied to the action button.
- [UITableViewRowActionStyle](uitableviewrowaction/style-swift.enum.md): Deprecated. Constants that specify the appearance of action buttons.
- [title](uitableviewrowaction/title.md): Deprecated. The title of the action button.
- [backgroundColor](uitableviewrowaction/backgroundcolor.md): Deprecated. The background color of the action button.
- [backgroundEffect](uitableviewrowaction/backgroundeffect.md): Deprecated. The visual effect to apply to the button.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Row actions

- [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md): The set of actions to perform when swiping on rows of a table.
- [UIContextualAction](uicontextualaction.md): An action to display when the user swipes a table row.
