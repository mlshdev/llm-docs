> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/event/connectivityevent(_:)](https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/connectivityevent(_:))

# CredentialSession.Event.connectivityEvent(\_:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A credential received a connectivity event during card emulation.

## Declaration

```swift
case connectivityEvent(CredentialSession.ConnectivityEvent)
```

<a id="discussion"></a>

## Discussion

You might not receive this event if your app hasn’t acquired the [CredentialSession.PresentmentIntentAssertion](../presentmentintentassertion.md). If your app doesn’t have the presentment intent assertion, Wallet or another default app might respond to certain field events, depending on the device configuration.

## See Also

### Card emulation events

- [CredentialSession.ConnectivityEvent](../connectivityevent.md): An event that a credential receives during card emulation.
