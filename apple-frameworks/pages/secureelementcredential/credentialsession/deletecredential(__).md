> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/deletecredential(_:)

# deleteCredential(\_:)

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Deletes a credential on the Secure Element.

## Declaration

```swift
func deleteCredential(_ credential: CredentialSession.Credential) async throws
```

## Parameters

- `credential`: The credential to delete.

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

- The most common errors are:

  - [CredentialSession.ErrorCode.invalidSessionState](errorcode/invalidsessionstate.md): The session isn’t in the [CredentialSession.State.management](state-swift.enum/management.md) state.

## See Also

### Managing a credential

- [provisionCredential(configurationUUID:name:)](provisioncredential%28configurationuuid_name_%29.md): Creates a credential in the Secure Element.
