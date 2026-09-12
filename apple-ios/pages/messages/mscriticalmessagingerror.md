> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalmessagingerror](https://developer.apple.com/documentation/messages/mscriticalmessagingerror)

# MSCriticalMessagingError

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Values that describe errors the Critical Messaging API returns.

## Declaration

```swift
enum MSCriticalMessagingError
```

## Topics

### Error codes

- [MSCriticalMessagingError.unknown](mscriticalmessagingerror/unknown.md): The error code the framework returns after an unknown error occurs.
- [MSCriticalMessagingError.invalidAuthenticationRequest](mscriticalmessagingerror/invalidauthenticationrequest.md): The authentication request isn’t valid.
- [MSCriticalMessagingError.notSupported](mscriticalmessagingerror/notsupported.md): The framework doesn’t support the current device.
- [MSCriticalMessagingError.notAuthorized](mscriticalmessagingerror/notauthorized.md): The operation isn’t authorized.
- [MSCriticalMessagingError.sendFailed](mscriticalmessagingerror/sendfailed.md): The message failed to send.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [MSStickersErrorDomain](msstickerserrordomain.md): The error domain for stickers.
- [MSMessagesErrorDomain](msmessageserrordomain.md): The error domain for iMessage apps.
- [MSMessageErrorCode](msmessageerrorcode.md): The error codes that the Messages framework generates.
