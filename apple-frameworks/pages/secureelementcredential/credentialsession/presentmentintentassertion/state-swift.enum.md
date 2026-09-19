> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/presentmentintentassertion/state-swift.enum

# CredentialSession.PresentmentIntentAssertion.State

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An enumeration of possible states of a presentment intent assertion.

## Declaration

```swift
enum State
```

## Topics

### Assertion states

- [CredentialSession.PresentmentIntentAssertion.State.active](state-swift.enum/active.md): The presentment intent assertion is active, offering exclusive use of the device’s contactless features.
- [CredentialSession.PresentmentIntentAssertion.State.invalid](state-swift.enum/invalid.md): The presentment intent assertion is invalid, and doesn’t provide exclusive use of contactless features.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Inspecting assertion state

- [state](state-swift.property.md): The state of a presentment intent assertion, indicating whether it’s currently valid.
