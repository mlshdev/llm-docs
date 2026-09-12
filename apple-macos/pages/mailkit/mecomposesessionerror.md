> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesessionerror](https://developer.apple.com/documentation/mailkit/mecomposesessionerror)

# MEComposeSessionError

**Framework:** MailKit  
**Kind:** Structure  
**Availability:** macOS 12.0+

An error that indicates the compose session is in an erroneous state.

## Declaration

```swift
struct MEComposeSessionError
```

## Topics

### Indicating Erroneous States

- [invalidBody](mecomposesessionerror/invalidbody.md): An error that indicates the message’s body is invalid.
- [invalidHeaders](mecomposesessionerror/invalidheaders.md): An error that indicates one or more of the message’s headers are invalid.
- [invalidRecipients](mecomposesessionerror/invalidrecipients.md): An error that indicates one or more of the message’s recipients are invalid.
- [MEComposeSessionErrorDomain](mecomposesessionerrordomain.md): A constant for the compose session error domain.

### Type Properties

- [errorDomain](mecomposesessionerror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Compose Sessions

- [MEComposeSession](mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidBegin(\_:)](mecomposesessionhandler/mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [mailComposeSessionDidEnd(\_:)](mecomposesessionhandler/mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
