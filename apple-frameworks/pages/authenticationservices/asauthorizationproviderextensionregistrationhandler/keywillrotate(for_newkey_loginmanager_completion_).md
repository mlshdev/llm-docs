> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/keywillrotate(for:newkey:loginmanager:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/keywillrotate(for:newkey:loginmanager:completion:))

# keyWillRotate(for:newKey:loginManager:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
optional func keyWillRotate(for keyType: ASAuthorizationProviderExtensionKeyType, newKey: SecKey, loginManager: ASAuthorizationProviderExtensionLoginManager, completion: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func keyWillRotate(for keyType: ASAuthorizationProviderExtensionKeyType, newKey: SecKey, loginManager: ASAuthorizationProviderExtensionLoginManager) async -> Bool
```

<a id="discussion"></a>

## Discussion

The specified keyType will rotate to a new key. The rotation is complete when the completion handler is called.  This is only called by the system for automatic key rotation.

# keyWillRotateForKeyType:newKey:loginManager:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (void) keyWillRotateForKeyType:(ASAuthorizationProviderExtensionKeyType) keyType newKey:(SecKeyRef) newKey loginManager:(ASAuthorizationProviderExtensionLoginManager *) loginManager completion:(void (^)(BOOL success)) completion;
```

<a id="discussion"></a>

## Discussion

The specified keyType will rotate to a new key. The rotation is complete when the completion handler is called.  This is only called by the system for automatic key rotation.
