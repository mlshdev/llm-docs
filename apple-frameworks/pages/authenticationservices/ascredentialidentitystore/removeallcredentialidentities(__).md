> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/removeallcredentialidentities(_:)](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/removeallcredentialidentities(_:))

# removeAllCredentialIdentities(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Removes all existing credential identities from the store.

## Declaration

```swift
func removeAllCredentialIdentities(_ completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func removeAllCredentialIdentities() async throws
```

## Parameters

- `completion`: An optional completion handler called after removing all existing credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the existing credential identities are removed from the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentities(\_:completion:)](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# removeAllCredentialIdentitiesWithCompletion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Removes all existing credential identities from the store.

## Declaration

```objectivec
- (void) removeAllCredentialIdentitiesWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: An optional completion handler called after removing all existing credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the existing credential identities are removed from the store.

## See Also

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentityEntries:completion:](replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeCredentialIdentityEntries:completion:](removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](../ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](../aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
