> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/completekeyrotation(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/completekeyrotation(_:))

# completeKeyRotation(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
func completeKeyRotation(_ keyType: ASAuthorizationProviderExtensionKeyType)
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="discussion"></a>

## Discussion

Completes rotation for the key to replace the previous key.

# completeKeyRotationForKeyType: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (void) completeKeyRotationForKeyType:(ASAuthorizationProviderExtensionKeyType) keyType;
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="discussion"></a>

## Discussion

Completes rotation for the key to replace the previous key.
