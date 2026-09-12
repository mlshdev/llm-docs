> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/removecredentialidentities(_:completion:)-67lcw](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/removecredentialidentities(_:completion:)-67lcw)

# removeCredentialIdentities(\_:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Remove the given credential identities from the store.

## Declaration

```swift
func removeCredentialIdentities(_ credentialIdentities: [any ASCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func removeCredentialIdentities(_ credentialIdentities: [any ASCredentialIdentity]) async throws
```

## Parameters

- `credentialIdentities`: A list of credential identities to remove.
- `completion`: An optional completion handler that runs when the operation finishes.

<a id="Discussion"></a>

## Discussion

Call this method if the credential store supports incremental updates to remove previously-added credential identities. On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t remove any of the objects in `credentialIdentities` from the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentities(\_:completion:)](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentities(\_:)](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# removeCredentialIdentityEntries:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Remove the given credential identities from the store.

## Declaration

```objectivec
- (void) removeCredentialIdentityEntries:(NSArray<id<ASCredentialIdentity>> *) credentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `credentialIdentities`: A list of credential identities to remove.
- `completion`: An optional completion handler that runs when the operation finishes.

<a id="Discussion"></a>

## Discussion

Call this method if the credential store supports incremental updates to remove previously-added credential identities. On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t remove any of the objects in `credentialIdentities` from the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentityEntries:completion:](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentitiesWithCompletion:](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
