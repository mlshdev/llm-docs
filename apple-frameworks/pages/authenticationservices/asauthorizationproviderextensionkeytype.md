> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionkeytype](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionkeytype)

# ASAuthorizationProviderExtensionKeyType (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The key types for platform single sign-on.

## Declaration

```swift
enum ASAuthorizationProviderExtensionKeyType
```

## Topics

### Identifying the key types

- [ASAuthorizationProviderExtensionKeyType.userDeviceEncryption](asauthorizationproviderextensionkeytype/userdeviceencryption.md): The user device encryption key.
- [ASAuthorizationProviderExtensionKeyType.userDeviceSigning](asauthorizationproviderextensionkeytype/userdevicesigning.md): The user device signing key.
- [ASAuthorizationProviderExtensionKeyType.userSecureEnclaveKey](asauthorizationproviderextensionkeytype/usersecureenclavekey.md): The user Secure Enclave key.

### Enumeration Cases

- [ASAuthorizationProviderExtensionKeyType.currentDeviceEncryption](asauthorizationproviderextensionkeytype/currentdeviceencryption.md)
- [ASAuthorizationProviderExtensionKeyType.currentDeviceSigning](asauthorizationproviderextensionkeytype/currentdevicesigning.md)
- [ASAuthorizationProviderExtensionKeyType.sharedDeviceEncryption](asauthorizationproviderextensionkeytype/shareddeviceencryption.md)
- [ASAuthorizationProviderExtensionKeyType.sharedDeviceSigning](asauthorizationproviderextensionkeytype/shareddevicesigning.md)
- [ASAuthorizationProviderExtensionKeyType.userSmartCard](asauthorizationproviderextensionkeytype/usersmartcard.md)

### Initializers

- [init(rawValue:)](asauthorizationproviderextensionkeytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing authentication

- [isDeviceRegistered](asauthorizationproviderextensionloginmanager/isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [isUserRegistered](asauthorizationproviderextensionloginmanager/isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](asauthorizationproviderextensionloginmanager/loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](asauthorizationproviderextensionloginmanager/ssotokens.md): The single sign-on response tokens for the current user and extension.
- [identity(for:)](asauthorizationproviderextensionloginmanager/identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](asauthorizationproviderextensionloginmanager/key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](asauthorizationproviderextensionloginmanager/userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

# ASAuthorizationProviderExtensionKeyType (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The key types for platform single sign-on.

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionKeyType : NSInteger;
```

## Topics

### Identifying the key types

- [ASAuthorizationProviderExtensionKeyTypeUserDeviceEncryption](asauthorizationproviderextensionkeytype/userdeviceencryption.md): The user device encryption key.
- [ASAuthorizationProviderExtensionKeyTypeUserDeviceSigning](asauthorizationproviderextensionkeytype/userdevicesigning.md): The user device signing key.
- [ASAuthorizationProviderExtensionKeyTypeUserSecureEnclaveKey](asauthorizationproviderextensionkeytype/usersecureenclavekey.md): The user Secure Enclave key.

### Enumeration Cases

- [ASAuthorizationProviderExtensionKeyTypeCurrentDeviceEncryption](asauthorizationproviderextensionkeytype/currentdeviceencryption.md)
- [ASAuthorizationProviderExtensionKeyTypeCurrentDeviceSigning](asauthorizationproviderextensionkeytype/currentdevicesigning.md)
- [ASAuthorizationProviderExtensionKeyTypeSharedDeviceEncryption](asauthorizationproviderextensionkeytype/shareddeviceencryption.md)
- [ASAuthorizationProviderExtensionKeyTypeSharedDeviceSigning](asauthorizationproviderextensionkeytype/shareddevicesigning.md)
- [ASAuthorizationProviderExtensionKeyTypeUserSmartCard](asauthorizationproviderextensionkeytype/usersmartcard.md)

## See Also

### Performing authentication

- [deviceRegistered](asauthorizationproviderextensionloginmanager/isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [userRegistered](asauthorizationproviderextensionloginmanager/isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](asauthorizationproviderextensionloginmanager/loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](asauthorizationproviderextensionloginmanager/ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyIdentityForKeyType:](asauthorizationproviderextensionloginmanager/identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](asauthorizationproviderextensionloginmanager/key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](asauthorizationproviderextensionloginmanager/userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.
