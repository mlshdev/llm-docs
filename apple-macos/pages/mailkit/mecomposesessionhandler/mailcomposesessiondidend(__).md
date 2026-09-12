> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesessionhandler/mailcomposesessiondidend(_:)](https://developer.apple.com/documentation/mailkit/mecomposesessionhandler/mailcomposesessiondidend(_:))

# mailComposeSessionDidEnd(\_:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Informs the handler when the user closes a compose window.

## Declaration

```swift
func mailComposeSessionDidEnd(_ session: MEComposeSession)
```

## Parameters

- `session`: The compose session that corresponds to the message the user is composing.

## See Also

### Handling Compose Sessions

- [MEComposeSession](../mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidBegin(\_:)](mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [MEComposeSessionError](../mecomposesessionerror.md): An error that indicates the compose session is in an erroneous state.

# mailComposeSessionDidEnd: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Informs the handler when the user closes a compose window.

## Declaration

```objectivec
- (void) mailComposeSessionDidEnd:(MEComposeSession *) session;
```

## Parameters

- `session`: The compose session that corresponds to the message the user is composing.

## See Also

### Handling Compose Sessions

- [MEComposeSession](../mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidBegin:](mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
