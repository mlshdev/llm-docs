> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalmessagingerror/notauthorized](https://developer.apple.com/documentation/messages/mscriticalmessagingerror/notauthorized)

# MSCriticalMessagingError.notAuthorized

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The operation isn’t authorized.

## Declaration

```swift
case notAuthorized
```

<a id="Discussion"></a>

## Discussion

The requested operation isn’t authorized; use [requestAuthorization(for:)](../mscriticalsmsmessenger/requestauthorization%28for_%29.md) to request someone’s authorization to be able to send background messages from this app.

## See Also

### Error codes

- [MSCriticalMessagingError.unknown](unknown.md): The error code the framework returns after an unknown error occurs.
- [MSCriticalMessagingError.invalidAuthenticationRequest](invalidauthenticationrequest.md): The authentication request isn’t valid.
- [MSCriticalMessagingError.notSupported](notsupported.md): The framework doesn’t support the current device.
- [MSCriticalMessagingError.sendFailed](sendfailed.md): The message failed to send.
