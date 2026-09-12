> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesessionerror/code](https://developer.apple.com/documentation/mailkit/mecomposesessionerror/code)

# MEComposeSessionError.Code (Swift)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Errors that indicate invalid compose session states.

## Declaration

```swift
enum Code
```

## Topics

### Indicating Erroneous States

- [MEComposeSessionError.Code.invalidBody](code/invalidbody.md): An error code that indicates the message’s body is invalid.
- [MEComposeSessionError.Code.invalidHeaders](code/invalidheaders.md): An error code that indicates one or more of the message’s headers are invalid.
- [MEComposeSessionError.Code.invalidRecipients](code/invalidrecipients.md): An error code that indicates one or more of the message’s recipients are invalid.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/mailkit/mecomposesessionerror/code/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MEComposeUserAction](../mecomposeuseraction.md)
- [MEMessageAction.Flag](../memessageaction/flag.md)
- [MEMessageEncryptionState](../memessageencryptionstate.md)
- [MEMessageSecurityError.Code](../memessagesecurityerror/code.md)

# MEComposeSessionErrorCode (Objective-C)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Errors that indicate invalid compose session states.

## Declaration

```objectivec
enum MEComposeSessionErrorCode : NSInteger;
```

## Topics

### Indicating Erroneous States

- [MEComposeSessionErrorCodeInvalidBody](code/invalidbody.md): An error code that indicates the message’s body is invalid.
- [MEComposeSessionErrorCodeInvalidHeaders](code/invalidheaders.md): An error code that indicates one or more of the message’s headers are invalid.
- [MEComposeSessionErrorCodeInvalidRecipients](code/invalidrecipients.md): An error code that indicates one or more of the message’s recipients are invalid.

## See Also

### Enumerations

- [MEComposeUserAction](../mecomposeuseraction.md)
- [MEMessageActionFlag](../memessageaction/flag.md)
- [MEMessageEncryptionState](../memessageencryptionstate.md)
- [MEMessageSecurityErrorCode](../memessagesecurityerror/code.md)
