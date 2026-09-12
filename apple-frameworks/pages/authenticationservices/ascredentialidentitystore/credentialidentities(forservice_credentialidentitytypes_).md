> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/credentialidentities(forservice:credentialidentitytypes:)](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/credentialidentities(forservice:credentialidentitytypes:))

# credentialIdentities(forService:credentialIdentityTypes:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Retrieves an array of all previously saved credential identities in the store for your extension.

## Declaration

```swift
func credentialIdentities(forService serviceIdentifier: ASCredentialServiceIdentifier? = nil, credentialIdentityTypes: ASCredentialIdentityStore.IdentityTypes = []) async -> [any ASCredentialIdentity]
```

## Parameters

- `serviceIdentifier`: An [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md) that limits results to only that service. Pass `nil` to get credential identities for all services. Defaults to `nil`.
- `credentialIdentityTypes`: An array of [ASCredentialIdentityStore.IdentityTypes](identitytypes.md) that limits results to only those types. Pass `[]` to get credential identities for all types. Defaults to `[]`.

<a id="return-value"></a>

## Return Value

An array of previously saved credential identities that match the identifier and identity type criteria.

## See Also

### Fetching saved credential identities

- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialIdentityStore.IdentityTypes](identitytypes.md): The defined identity types for use in retrieving credentials.
