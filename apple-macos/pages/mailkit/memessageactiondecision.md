> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageactiondecision](https://developer.apple.com/documentation/mailkit/memessageactiondecision)

# MEMessageActionDecision (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.

## Declaration

```swift
class MEMessageActionDecision
```

## Topics

### Determining Actions to Perform on Messages

- [invokeAgainWithBody](memessageactiondecision/invokeagainwithbody.md): An object that indicates the handler needs the message content before it can decide what action to take on a message.

### Type Methods

- [action(\_:)](memessageactiondecision/action%28__%29.md)
- [actions(\_:)](memessageactiondecision/actions%28__%29.md)

### Initializers

- [init(coder:)](memessageactiondecision/init%28coder_%29.md)

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
- [MEMessageAction](memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageAction.MessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

# MEMessageActionDecision (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.

## Declaration

```objectivec
@interface MEMessageActionDecision : NSObject
```

## Topics

### Determining Actions to Perform on Messages

- [invokeAgainWithBody](memessageactiondecision/invokeagainwithbody.md): An object that indicates the handler needs the message content before it can decide what action to take on a message.

### Type Methods

- [decisionApplyingAction:](memessageactiondecision/action%28__%29.md)
- [decisionApplyingActions:](memessageactiondecision/actions%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Performing Actions on Messages

- [decideActionForMessage:completionHandler:](memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageAction](memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageActionMessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.
