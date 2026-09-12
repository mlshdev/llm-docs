> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/beginkeyrotation(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/beginkeyrotation(_:))

# beginKeyRotation(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
func beginKeyRotation(_ keyType: ASAuthorizationProviderExtensionKeyType) -> SecKey?
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="discussion"></a>

## Discussion

Generates a new key for the specified platform SSO key type using the strongest supported key strength returning the new key.  Nil is returned if there is an error generating the new key.

# beginKeyRotationForKeyType: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (SecKeyRef) beginKeyRotationForKeyType:(ASAuthorizationProviderExtensionKeyType) keyType;
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="discussion"></a>

## Discussion

Generates a new key for the specified platform SSO key type using the strongest supported key strength returning the new key.  Nil is returned if there is an error generating the new key.
