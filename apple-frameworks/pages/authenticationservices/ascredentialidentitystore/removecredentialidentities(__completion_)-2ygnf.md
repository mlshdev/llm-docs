> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/removecredentialidentities(_:completion:)-2ygnf](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/removecredentialidentities(_:completion:)-2ygnf)

# removeCredentialIdentities(\_:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Removes the given credential identities from the store.

> Use [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-67lcw.md) instead.

## Declaration

```swift
func removeCredentialIdentities(_ credentialIdentities: [ASPasswordCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func removeCredentialIdentities(_ credentialIdentities: [ASPasswordCredentialIdentity]) async throws
```

## Parameters

- `credentialIdentities`: An array of [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md) objects to remove from the store.
- `completion`: An optional completion handler called after removing the credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the objects in `credentialIdentities` is removed from the store.

<a id="Discussion"></a>

## Discussion

Use this method only if the store supports incremental updates to remove previously added credentials to the store.

## See Also

### Deprecated methods

- [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [replaceCredentialIdentities(with:completion:)](replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.

# removeCredentialIdentities:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Removes the given credential identities from the store.

> Use [removeCredentialIdentityEntries:completion:](removecredentialidentities%28__completion_%29-67lcw.md) instead.

## Declaration

```objectivec
- (void) removeCredentialIdentities:(NSArray<ASPasswordCredentialIdentity *> *) credentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `credentialIdentities`: An array of [ASPasswordCredentialIdentity](../aspasswordcredentialidentity.md) objects to remove from the store.
- `completion`: An optional completion handler called after removing the credential identities. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the objects in `credentialIdentities` is removed from the store.

<a id="Discussion"></a>

## Discussion

Use this method only if the store supports incremental updates to remove previously added credentials to the store.

## See Also

### Deprecated methods

- [saveCredentialIdentities:completion:](savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [replaceCredentialIdentitiesWithIdentities:completion:](replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.
