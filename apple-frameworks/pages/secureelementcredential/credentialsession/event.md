> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/event](https://developer.apple.com/documentation/secureelementcredential/credentialsession/event)

# CredentialSession.Event

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Events produced by a credential session, such as connectivity events and errors.

## Declaration

```swift
enum Event
```

## Topics

### Credential events

- [CredentialSession.Event.credentialFinishedInstalling(credential:)](event/credentialfinishedinstalling%28credential_%29.md): The session finished installing a credential.
- [CredentialSession.Credential](credential.md): Information about a credential that a credential session retrieves from the Secure Element.

### Card emulation events

- [CredentialSession.Event.connectivityEvent(\_:)](event/connectivityevent%28__%29.md): A credential received a connectivity event during card emulation.
- [CredentialSession.ConnectivityEvent](connectivityevent.md): An event that a credential receives during card emulation.

### NFC field events

- [CredentialSession.Event.fieldStateChanged(info:)](event/fieldstatechanged%28info_%29.md): The state of the NFC RF field changed during card emulation.
- [CredentialSession.NFCFieldInformation](nfcfieldinformation.md): The state of an NFC RF field.

### Invalidation events

- [CredentialSession.Event.sessionInvalidated(reason:)](event/sessioninvalidated%28reason_%29.md): The session became invalidated.
- [CredentialSession.ErrorCode](errorcode.md): An error encountered by a credential session.

### Timeout events

- [CredentialSession.Event.cardEmulationTimeout](event/cardemulationtimeout.md): The session’s card emulation timer expired.
- [CredentialSession.Event.presentmentIntentAssertionTimeout](event/presentmentintentassertiontimeout.md): The session’s presentment intent assertion timed out.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling session events

- [eventStream](eventstream.md): An asynchronous stream of session events.
