> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/event/presentmentintentassertiontimeout](https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/presentmentintentassertiontimeout)

# CredentialSession.Event.presentmentIntentAssertionTimeout

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The session’s presentment intent assertion timed out.

## Declaration

```swift
case presentmentIntentAssertionTimeout
```

<a id="discussion"></a>

## Discussion

A [CredentialSession.PresentmentIntentAssertion](../presentmentintentassertion.md) granted by a credential session lasts for 60 seconds. If it expires, your app needs to request a new one with [acquirePresentmentAssertion()](../acquirepresentmentassertion%28%29.md).

## See Also

### Timeout events

- [CredentialSession.Event.cardEmulationTimeout](cardemulationtimeout.md): The session’s card emulation timer expired.
