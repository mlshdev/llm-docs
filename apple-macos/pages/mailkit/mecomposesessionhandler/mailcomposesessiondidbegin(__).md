> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/mecomposesessionhandler/mailcomposesessiondidbegin(_:)

# mailComposeSessionDidBegin(\_:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Informs the handler when the user opens a compose window.

## Declaration

```swift
func mailComposeSessionDidBegin(_ session: MEComposeSession)
```

## Parameters

- `session`: The compose session that corresponds to the message the user is composing.

## See Also

### Handling Compose Sessions

- [MEComposeSession](../mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidEnd(\_:)](mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
- [MEComposeSessionError](../mecomposesessionerror.md): An error that indicates the compose session is in an erroneous state.

# mailComposeSessionDidBegin: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Informs the handler when the user opens a compose window.

## Declaration

```objectivec
- (void) mailComposeSessionDidBegin:(MEComposeSession *) session;
```

## Parameters

- `session`: The compose session that corresponds to the message the user is composing.

## See Also

### Handling Compose Sessions

- [MEComposeSession](../mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidEnd:](mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
