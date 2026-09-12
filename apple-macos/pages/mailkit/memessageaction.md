> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageaction](https://developer.apple.com/documentation/mailkit/memessageaction)

# MEMessageAction (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An action the system performs on a message, such as setting a color or archiving it.

## Declaration

```swift
class MEMessageAction
```

## Topics

### Changing the Read Status

- [markAsRead](memessageaction/markasread.md): An object that marks the message as read.
- [markAsUnread](memessageaction/markasunread.md): An object that marks the message as unread.

### Transferring Messages

- [moveToArchive](memessageaction/movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToJunk](memessageaction/movetojunk.md): An object that moves the message to the account’s Junk mailbox.
- [moveToTrash](memessageaction/movetotrash.md): An object that moves the message to the account’s Trash mailbox.

### Type Methods

- [flag(\_:)](memessageaction/flag%28__%29.md)
- [setBackgroundColor(\_:)](memessageaction/setbackgroundcolor%28__%29.md)

### Enumerations

- [MEMessageAction.Flag](memessageaction/flag.md)
- [MEMessageAction.MessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

### Initializers

- [init(coder:)](memessageaction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Performing Actions on Messages

- [decideAction(for:completionHandler:)](memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageActionDecision](memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.
- [MEMessageAction.MessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

# MEMessageAction (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An action the system performs on a message, such as setting a color or archiving it.

## Declaration

```objectivec
@interface MEMessageAction : NSObject
```

## Topics

### Changing the Read Status

- [markAsReadAction](memessageaction/markasread.md): An object that marks the message as read.
- [markAsUnreadAction](memessageaction/markasunread.md): An object that marks the message as unread.

### Transferring Messages

- [moveToArchiveAction](memessageaction/movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToJunkAction](memessageaction/movetojunk.md): An object that moves the message to the account’s Junk mailbox.
- [moveToTrashAction](memessageaction/movetotrash.md): An object that moves the message to the account’s Trash mailbox.

### Type Methods

- [flagActionWithFlag:](memessageaction/flag%28__%29.md)
- [setBackgroundColorActionWithColor:](memessageaction/setbackgroundcolor%28__%29.md)

### Enumerations

- [MEMessageActionFlag](memessageaction/flag.md)
- [MEMessageActionMessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Performing Actions on Messages

- [decideActionForMessage:completionHandler:](memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageActionDecision](memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.
- [MEMessageActionMessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.
