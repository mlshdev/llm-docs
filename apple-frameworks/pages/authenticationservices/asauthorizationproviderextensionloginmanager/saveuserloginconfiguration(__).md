> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/saveuserloginconfiguration(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/saveuserloginconfiguration(_:))

# saveUserLoginConfiguration(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func saveUserLoginConfiguration(_ userLoginConfiguration: ASAuthorizationProviderExtensionUserLoginConfiguration) throws
```

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

## See Also

### Instance Methods

- [decryptionKeysNeedRepair()](decryptionkeysneedrepair%28%29.md)
- [resetDeviceKeys()](resetdevicekeys%28%29.md)
- [resetUserSecureEnclaveKey()](resetusersecureenclavekey%28%29.md)

# saveUserLoginConfiguration:error: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (BOOL) saveUserLoginConfiguration:(ASAuthorizationProviderExtensionUserLoginConfiguration *) userLoginConfiguration error:(NSError **) error;
```

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

## See Also

### Instance Methods

- [decryptionKeysNeedRepair](decryptionkeysneedrepair%28%29.md)
- [resetDeviceKeys](resetdevicekeys%28%29.md)
- [resetUserSecureEnclaveKey](resetusersecureenclavekey%28%29.md)
