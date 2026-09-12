> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageaction/messagecolor](https://developer.apple.com/documentation/mailkit/memessageaction/messagecolor)

# MEMessageAction.MessageColor (Swift)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

A color that the system uses to display a message in the message list.

## Declaration

```swift
enum MessageColor
```

## Topics

### Specifying a Message Color

- [MEMessageAction.MessageColor.green](messagecolor/green.md): Sets the color of the message to green.
- [MEMessageAction.MessageColor.yellow](messagecolor/yellow.md): Sets the color of the message to yellow.
- [MEMessageAction.MessageColor.orange](messagecolor/orange.md): Sets the color of the message to orange.
- [MEMessageAction.MessageColor.red](messagecolor/red.md): Sets the color of the message to red.
- [MEMessageAction.MessageColor.purple](messagecolor/purple.md): Sets the color of the message to purple.
- [MEMessageAction.MessageColor.blue](messagecolor/blue.md): Sets the color of the message to blue.
- [MEMessageAction.MessageColor.gray](messagecolor/gray.md): Sets the color of the message to gray.
- [MEMessageAction.MessageColor.none](messagecolor/none.md): Clears the color of the message.

### Initializers

- [init(rawValue:)](messagecolor/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing Actions on Messages

- [decideAction(for:completionHandler:)](../memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageAction](../memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageActionDecision](../memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.

# MEMessageActionMessageColor (Objective-C)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

A color that the system uses to display a message in the message list.

## Declaration

```objectivec
enum MEMessageActionMessageColor : NSInteger;
```

## Topics

### Specifying a Message Color

- [MEMessageActionMessageColorGreen](messagecolor/green.md): Sets the color of the message to green.
- [MEMessageActionMessageColorYellow](messagecolor/yellow.md): Sets the color of the message to yellow.
- [MEMessageActionMessageColorOrange](messagecolor/orange.md): Sets the color of the message to orange.
- [MEMessageActionMessageColorRed](messagecolor/red.md): Sets the color of the message to red.
- [MEMessageActionMessageColorPurple](messagecolor/purple.md): Sets the color of the message to purple.
- [MEMessageActionMessageColorBlue](messagecolor/blue.md): Sets the color of the message to blue.
- [MEMessageActionMessageColorGray](messagecolor/gray.md): Sets the color of the message to gray.
- [MEMessageActionMessageColorNone](messagecolor/none.md): Clears the color of the message.

## See Also

### Performing Actions on Messages

- [decideActionForMessage:completionHandler:](../memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageAction](../memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageActionDecision](../memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.
