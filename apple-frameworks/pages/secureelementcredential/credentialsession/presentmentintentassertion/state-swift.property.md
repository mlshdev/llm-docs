> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/presentmentintentassertion/state-swift.property

# state

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state of a presentment intent assertion, indicating whether it’s currently valid.

## Declaration

```swift
final var state: CredentialSession.PresentmentIntentAssertion.State { get async }
```

<a id="discussion"></a>

## Discussion

Be sure to check if the state of the acquired intent assertion is stale before attempting to present over the contactess interface.

## See Also

### Inspecting assertion state

- [CredentialSession.PresentmentIntentAssertion.State](state-swift.enum.md): An enumeration of possible states of a presentment intent assertion.
