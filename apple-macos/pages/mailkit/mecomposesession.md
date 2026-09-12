> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesession](https://developer.apple.com/documentation/mailkit/mecomposesession)

# MEComposeSession (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that represents a single mail compose window.

## Declaration

```swift
class MEComposeSession
```

## Topics

### Managing Compose Sessions

- [sessionID](mecomposesession/sessionid.md): A unique identifier for the session.
- [reload()](mecomposesession/reload%28%29.md): Refreshes the compose session with the extension’s new information.

### Accessing Message Properties

- [mailMessage](mecomposesession/mailmessage.md): The properties of the mail message, such as the subject and recipients.

### Instance Properties

- [composeContext](mecomposesession/composecontext.md)

### Initializers

- [init(coder:)](mecomposesession/init%28coder_%29.md)

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

### Handling Compose Sessions

- [mailComposeSessionDidBegin(\_:)](mecomposesessionhandler/mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [mailComposeSessionDidEnd(\_:)](mecomposesessionhandler/mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
- [MEComposeSessionError](mecomposesessionerror.md): An error that indicates the compose session is in an erroneous state.

# MEComposeSession (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that represents a single mail compose window.

## Declaration

```objectivec
@interface MEComposeSession : NSObject
```

## Topics

### Managing Compose Sessions

- [sessionID](mecomposesession/sessionid.md): A unique identifier for the session.
- [reloadSession](mecomposesession/reload%28%29.md): Refreshes the compose session with the extension’s new information.

### Accessing Message Properties

- [mailMessage](mecomposesession/mailmessage.md): The properties of the mail message, such as the subject and recipients.

### Instance Properties

- [composeContext](mecomposesession/composecontext.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Handling Compose Sessions

- [mailComposeSessionDidBegin:](mecomposesessionhandler/mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [mailComposeSessionDidEnd:](mecomposesessionhandler/mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
