> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/replacecredentialidentities(_:completion:)](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/replacecredentialidentities(_:completion:))

# replaceCredentialIdentities(\_:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Replaces existing credential identities with new credential identities.

## Declaration

```swift
func replaceCredentialIdentities(_ newCredentialIdentities: [any ASCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func replaceCredentialIdentities(_ newCredentialIdentities: [any ASCredentialIdentity]) async throws
```

<a id="Discussion"></a>

## Discussion

This method deletes existing credential identities in the store and saves the newly provided credential identity objects. On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t save any of the objects in `newCredentialIdentities` to the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [removeAllCredentialIdentities(\_:)](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# replaceCredentialIdentityEntries:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Replaces existing credential identities with new credential identities.

## Declaration

```objectivec
- (void) replaceCredentialIdentityEntries:(NSArray<id<ASCredentialIdentity>> *) newCredentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

This method deletes existing credential identities in the store and saves the newly provided credential identity objects. On failure, this method calls the callback with an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) and doesn’t save any of the objects in `newCredentialIdentities` to the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [removeAllCredentialIdentitiesWithCompletion:](removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentityEntries:completion:](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
