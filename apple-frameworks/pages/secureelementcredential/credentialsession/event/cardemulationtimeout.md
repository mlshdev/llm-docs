> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/event/cardemulationtimeout](https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/cardemulationtimeout)

# CredentialSession.Event.cardEmulationTimeout

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The session’s card emulation timer expired.

## Declaration

```swift
case cardEmulationTimeout
```

<a id="discussion"></a>

## Discussion

This event the session’s state back to [CredentialSession.State.management](../state-swift.enum/management.md).

When handling this event, SwiftUI applications must invalidate the [CredentialTransaction.Configuration](../../credentialtransaction/configuration.md) requested for this transaction.

## See Also

### Timeout events

- [CredentialSession.Event.presentmentIntentAssertionTimeout](presentmentintentassertiontimeout.md): The session’s presentment intent assertion timed out.
