> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/connectivityevent](https://developer.apple.com/documentation/secureelementcredential/credentialsession/connectivityevent)

# CredentialSession.ConnectivityEvent

**Framework:** SecureElementCredential  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An event that a credential receives during card emulation.

## Declaration

```swift
struct ConnectivityEvent
```

## Topics

### Identifying the target instance

- [instanceApplicationIdentifier](connectivityevent/instanceapplicationidentifier.md): The instance application identifier associated with the credential that receives an event.

### Inspecting event data

- [data](connectivityevent/data.md): The data a credential receives during card emulation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Card emulation events

- [CredentialSession.Event.connectivityEvent(\_:)](event/connectivityevent%28__%29.md): A credential received a connectivity event during card emulation.
