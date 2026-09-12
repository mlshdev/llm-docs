> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/replacecredentialidentities(with:completion:)](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/replacecredentialidentities(with:completion:))

# replaceCredentialIdentities(with:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Replaces existing credential identities with new credential identities.

> Use [replaceCredentialIdentities(\_:completion:)](replacecredentialidentities%28__completion_%29.md) instead.

## Declaration

```swift
func replaceCredentialIdentities(with newCredentialIdentities: [ASPasswordCredentialIdentity], completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func replaceCredentialIdentities(with newCredentialIdentities: [ASPasswordCredentialIdentity]) async throws
```

## Parameters

- `newCredentialIdentities`: An array of new credential identity objects to replace the old ones.
- `completion`: An optional completion block called after the operation finishes.

<a id="Discussion"></a>

## Discussion

This method deletes existing credential identities that are persisted in the store and saves the newly provided credential identity objects. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the new credential identities are saved.

## See Also

### Deprecated methods

- [saveCredentialIdentities(\_:completion:)](savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [removeCredentialIdentities(\_:completion:)](removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.

# replaceCredentialIdentitiesWithIdentities:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Replaces existing credential identities with new credential identities.

> Use [replaceCredentialIdentityEntries:completion:](replacecredentialidentities%28__completion_%29.md) instead.

## Declaration

```objectivec
- (void) replaceCredentialIdentitiesWithIdentities:(NSArray<ASPasswordCredentialIdentity *> *) newCredentialIdentities completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `newCredentialIdentities`: An array of new credential identity objects to replace the old ones.
- `completion`: An optional completion block called after the operation finishes.

<a id="Discussion"></a>

## Discussion

This method deletes existing credential identities that are persisted in the store and saves the newly provided credential identity objects. If the operation fails, an error with domain [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md) is provided and none of the new credential identities are saved.

## See Also

### Deprecated methods

- [saveCredentialIdentities:completion:](savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [removeCredentialIdentities:completion:](removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.
