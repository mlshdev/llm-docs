> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/savecredentialidentities(_:completion:)-1bbx6](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/savecredentialidentities(_:completion:)-1bbx6)

# saveCredentialIdentities(\_:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Save the supplied credential identities to the store.

## Declaration

```swift
func saveCredentialIdentities(_ credentialIdentities: [any ASCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func saveCredentialIdentities(_ credentialIdentities: [any ASCredentialIdentity]) async throws
```

## Parameters

- `credentialIdentities`: A list of credential identities to save.
- `completion`: An optional completion handler that runs when the operation finishes.

<a id="Discussion"></a>

## Discussion

Call this method if the credential store supports incremental updates to add new credential identities. Otherwise, call this method passing all credential identities. If any of the credential identities in the `credentialIdentities` array already exist in the store, this method overwrites them with the values in the array.

On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t save any of the objects in `credentialIdentities` to the store.

## See Also

### Adding and removing credential identities

- [replaceCredentialIdentities(\_:completion:)](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentities(\_:)](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# saveCredentialIdentityEntries:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Save the supplied credential identities to the store.

## Declaration

```objectivec
- (void) saveCredentialIdentityEntries:(NSArray<id<ASCredentialIdentity>> *) credentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `credentialIdentities`: A list of credential identities to save.
- `completion`: An optional completion handler that runs when the operation finishes.

<a id="Discussion"></a>

## Discussion

Call this method if the credential store supports incremental updates to add new credential identities. Otherwise, call this method passing all credential identities. If any of the credential identities in the `credentialIdentities` array already exist in the store, this method overwrites them with the values in the array.

On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t save any of the objects in `credentialIdentities` to the store.

## See Also

### Adding and removing credential identities

- [replaceCredentialIdentityEntries:completion:](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentitiesWithCompletion:](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentityEntries:completion:](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
