> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/presentmentintentassertion/relinquish()

# relinquish()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Ends the presentment intent assertion.

## Declaration

```swift
final func relinquish() async throws
```

## Mentioned In

- [Accessing and using secure element credentials](../../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

Call this function after your presentment task finishes.

A [CredentialSession.PresentmentIntentAssertion](../presentmentintentassertion.md) times out after 60 seconds. If you don’t explicitly relinquish the object by then, the session produces a [CredentialSession.Event.presentmentIntentAssertionTimeout](../event/presentmentintentassertiontimeout.md) event, and invalidates this object.
