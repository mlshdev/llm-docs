> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextualaction](https://developer.apple.com/documentation/uikit/uicontextualaction)

# UIContextualAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An action to display when the user swipes a table row.

## Declaration

```swift
@MainActor class UIContextualAction
```

<a id="overview"></a>

## Overview

Create [UIContextualAction](uicontextualaction.md) objects to define the types of actions that can be performed when the user swipes left or right on a table row. Use your actions to initialize a [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) object in your table view delegate object.

## Topics

### Creating the contextual action

- [init(style:title:handler:)](uicontextualaction/init%28style_title_handler_%29.md): Creates a new contextual action with the specified title and handler.

### Configuring the appearance

- [title](uicontextualaction/title.md): The title displayed on the action button.
- [backgroundColor](uicontextualaction/backgroundcolor.md): The background color of the action button.
- [image](uicontextualaction/image.md): The image to display in the action button.

### Getting the configuration details

- [handler](uicontextualaction/handler-swift.property.md): The handler block to execute when the user selects the action.
- [UIContextualAction.Handler](uicontextualaction/handler-swift.typealias.md): The handler block to call in response to the selection of an action.
- [style](uicontextualaction/style-swift.property.md): The style that applies to the action button.
- [UIContextualAction.Style](uicontextualaction/style-swift.enum.md): Constants indicating the style information that applies to the action button.

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

- [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md): The set of actions to perform when swiping on rows of a table.
- [UITableViewRowAction](uitableviewrowaction.md): Deprecated. A single action to present when the user swipes horizontally in a table row.

# UIContextualAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An action to display when the user swipes a table row.

## Declaration

```objectivec
@interface UIContextualAction : NSObject
```

<a id="overview"></a>

## Overview

Create [UIContextualAction](uicontextualaction.md) objects to define the types of actions that can be performed when the user swipes left or right on a table row. Use your actions to initialize a [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md) object in your table view delegate object.

## Topics

### Creating the contextual action

- [contextualActionWithStyle:title:handler:](uicontextualaction/init%28style_title_handler_%29.md): Creates a new contextual action with the specified title and handler.

### Configuring the appearance

- [title](uicontextualaction/title.md): The title displayed on the action button.
- [backgroundColor](uicontextualaction/backgroundcolor.md): The background color of the action button.
- [image](uicontextualaction/image.md): The image to display in the action button.

### Getting the configuration details

- [handler](uicontextualaction/handler-swift.property.md): The handler block to execute when the user selects the action.
- [UIContextualActionHandler](uicontextualaction/handler-swift.typealias.md): The handler block to call in response to the selection of an action.
- [style](uicontextualaction/style-swift.property.md): The style that applies to the action button.
- [UIContextualActionStyle](uicontextualaction/style-swift.enum.md): Constants indicating the style information that applies to the action button.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Row actions

- [UISwipeActionsConfiguration](uiswipeactionsconfiguration.md): The set of actions to perform when swiping on rows of a table.
- [UITableViewRowAction](uitableviewrowaction.md): Deprecated. A single action to present when the user swipes horizontally in a table row.
