> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/sessioninvalidated(reason:)

# CredentialSession.Event.sessionInvalidated(reason:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The session became invalidated.

## Declaration

```swift
case sessionInvalidated(reason: CredentialSession.ErrorCode)
```

<a id="discussion"></a>

## Discussion

The associated value `reason` provides a reason for the invalidation.

## See Also

### Invalidation events

- [CredentialSession.ErrorCode](../errorcode.md): An error encountered by a credential session.
