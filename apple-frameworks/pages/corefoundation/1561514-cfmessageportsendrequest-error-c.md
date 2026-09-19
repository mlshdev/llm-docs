> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/1561514-cfmessageportsendrequest-error-c

# CFMessagePortSendRequest Error Codes

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

Error codes for `CFMessagePortSendRequest`.

## Topics

### Constants

- [kCFMessagePortSuccess](kcfmessageportsuccess.md): The message was successfully sent and, if a reply was expected, a reply was received.
- [kCFMessagePortSendTimeout](kcfmessageportsendtimeout.md): The message could not be sent before the send timeout.
- [kCFMessagePortReceiveTimeout](kcfmessageportreceivetimeout.md): No reply was received before the receive timeout.
- [kCFMessagePortIsInvalid](kcfmessageportisinvalid.md): The message could not be sent because the message port is invalid.
- [kCFMessagePortTransportError](kcfmessageporttransporterror.md): An error occurred trying to send the message.
- [kCFMessagePortBecameInvalidError](kcfmessageportbecameinvaliderror.md): The message port was invalidated.
