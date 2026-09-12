> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/savecredentialidentities(_:completion:)-5vs4m](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/savecredentialidentities(_:completion:)-5vs4m)

# saveCredentialIdentities(\_:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Saves the given credential identities to the store.

> Use [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-1bbx6.md) instead.

## Declaration

```swift
func saveCredentialIdentities(_ credentialIdentities: [ASPasswordCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func saveCredentialIdentities(_ credentialIdentities: [ASPasswordCredentialIdentity]) async throws
```

## Parameters

- `credentialIdentities`: An array of [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md) objects to save to the store.
- `completion`: An optional completion handler to be called after adding the credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) will be provided and none of the objects in credentialIdentities are saved to the store.

<a id="Discussion"></a>

## Discussion

If the store supports incremental updates, call this method to add new credential identities since the last time the store was updated. Otherwise, call this method to pass all credential identities. If some credential identities in `credentialIdentities` already exist in the store, they will be replaced by those from `credentialIdentities`.

## See Also

### Deprecated methods

- [replaceCredentialIdentities(with:completion:)](replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.
- [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.

# saveCredentialIdentities:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Saves the given credential identities to the store.

> Use [saveCredentialIdentityEntries:completion:](savecredentialidentities%28__completion_%29-1bbx6.md) instead.

## Declaration

```objectivec
- (void) saveCredentialIdentities:(NSArray<ASPasswordCredentialIdentity *> *) credentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `credentialIdentities`: An array of [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md) objects to save to the store.
- `completion`: An optional completion handler to be called after adding the credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) will be provided and none of the objects in credentialIdentities are saved to the store.

<a id="Discussion"></a>

## Discussion

If the store supports incremental updates, call this method to add new credential identities since the last time the store was updated. Otherwise, call this method to pass all credential identities. If some credential identities in `credentialIdentities` already exist in the store, they will be replaced by those from `credentialIdentities`.

## See Also

### Deprecated methods

- [replaceCredentialIdentitiesWithIdentities:completion:](replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.
- [removeCredentialIdentities:completion:](removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.
