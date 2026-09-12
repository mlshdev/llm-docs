> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalmessagingerror/notsupported](https://developer.apple.com/documentation/messages/mscriticalmessagingerror/notsupported)

# MSCriticalMessagingError.notSupported

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The framework doesn’t support the current device.

## Declaration

```swift
case notSupported
```

## Mentioned In

- [Sending SMS messages from an app](../critical-messaging-api.md)

<a id="Discussion"></a>

## Discussion

The device a person is using isn’t supported by the Critical Messaging API.

## See Also

### Error codes

- [MSCriticalMessagingError.unknown](unknown.md): The error code the framework returns after an unknown error occurs.
- [MSCriticalMessagingError.invalidAuthenticationRequest](invalidauthenticationrequest.md): The authentication request isn’t valid.
- [MSCriticalMessagingError.notAuthorized](notauthorized.md): The operation isn’t authorized.
- [MSCriticalMessagingError.sendFailed](sendfailed.md): The message failed to send.
