> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/presentmentintentassertiontimeout

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
