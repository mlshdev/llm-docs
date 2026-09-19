> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/saveuserloginconfiguration(_:)

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
