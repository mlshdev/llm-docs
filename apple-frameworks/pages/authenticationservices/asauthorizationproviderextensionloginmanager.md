> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager)

# ASAuthorizationProviderExtensionLoginManager (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

An interface to maintain platform single sign-on (SSO) during authentication and registration.

## Declaration

```swift
class ASAuthorizationProviderExtensionLoginManager
```

## Mentioned In

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md)

<a id="overview"></a>

## Overview

Use this class to perform registration and authentication tasks, and to repair registrations.

## Topics

### Performing registration

- [loginUserName](asauthorizationproviderextensionloginmanager/loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](asauthorizationproviderextensionloginmanager/registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewController(completion:)](asauthorizationproviderextensionloginmanager/presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate(\_:keyType:)](asauthorizationproviderextensionloginmanager/savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration(\_:)](asauthorizationproviderextensionloginmanager/saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isDeviceRegistered](asauthorizationproviderextensionloginmanager/isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [isUserRegistered](asauthorizationproviderextensionloginmanager/isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](asauthorizationproviderextensionloginmanager/loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](asauthorizationproviderextensionloginmanager/ssotokens.md): The single sign-on response tokens for the current user and extension.
- [identity(for:)](asauthorizationproviderextensionloginmanager/identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](asauthorizationproviderextensionloginmanager/key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](asauthorizationproviderextensionloginmanager/userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

### Repairing registrations

- [userRegistrationsNeedsRepair()](asauthorizationproviderextensionloginmanager/userregistrationsneedsrepair%28%29.md): Invokes the user registration to run again so the current user can repair it.
- [deviceRegistrationsNeedsRepair()](asauthorizationproviderextensionloginmanager/deviceregistrationsneedsrepair%28%29.md): Invokes the device registration to run again so the current user can repair it.
- [resetKeys()](asauthorizationproviderextensionloginmanager/resetkeys%28%29.md): Creates new encryption, signing, and Secure Enclave keys.

### Instance Properties

- [extensionData](asauthorizationproviderextensionloginmanager/extensiondata.md)
- [userLoginConfiguration](asauthorizationproviderextensionloginmanager/userloginconfiguration.md)
- [authenticationMethod](asauthorizationproviderextensionloginmanager/authenticationmethod.md)

### Instance Methods

- [decryptionKeysNeedRepair()](asauthorizationproviderextensionloginmanager/decryptionkeysneedrepair%28%29.md)
- [resetDeviceKeys()](asauthorizationproviderextensionloginmanager/resetdevicekeys%28%29.md)
- [resetUserSecureEnclaveKey()](asauthorizationproviderextensionloginmanager/resetusersecureenclavekey%28%29.md)
- [saveUserLoginConfiguration(\_:)](asauthorizationproviderextensionloginmanager/saveuserloginconfiguration%28__%29.md)
- [attestKey(ofType:clientDataHash:)](asauthorizationproviderextensionloginmanager/attestkey%28oftype_clientdatahash_%29.md)
- [attestPendingKey(ofType:clientDataHash:)](asauthorizationproviderextensionloginmanager/attestpendingkey%28oftype_clientdatahash_%29.md)
- [beginKeyRotation(\_:)](asauthorizationproviderextensionloginmanager/beginkeyrotation%28__%29.md)
- [completeKeyRotation(\_:)](asauthorizationproviderextensionloginmanager/completekeyrotation%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuration

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md): Specify how Platform SSO authenticates with the identity provider.
- [ASAuthorizationProviderExtensionLoginConfiguration](asauthorizationproviderextensionloginconfiguration.md): An interface for configuring platform single sign-on.

# ASAuthorizationProviderExtensionLoginManager (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

An interface to maintain platform single sign-on (SSO) during authentication and registration.

## Declaration

```objectivec
@interface ASAuthorizationProviderExtensionLoginManager : NSObject
```

## Mentioned In

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md)

<a id="overview"></a>

## Overview

Use this class to perform registration and authentication tasks, and to repair registrations.

## Topics

### Performing registration

- [loginUserName](asauthorizationproviderextensionloginmanager/loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](asauthorizationproviderextensionloginmanager/registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewControllerWithCompletion:](asauthorizationproviderextensionloginmanager/presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate:keyType:](asauthorizationproviderextensionloginmanager/savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration:error:](asauthorizationproviderextensionloginmanager/saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [deviceRegistered](asauthorizationproviderextensionloginmanager/isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [userRegistered](asauthorizationproviderextensionloginmanager/isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](asauthorizationproviderextensionloginmanager/loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](asauthorizationproviderextensionloginmanager/ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyIdentityForKeyType:](asauthorizationproviderextensionloginmanager/identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](asauthorizationproviderextensionloginmanager/key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](asauthorizationproviderextensionloginmanager/userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

### Repairing registrations

- [userRegistrationsNeedsRepair](asauthorizationproviderextensionloginmanager/userregistrationsneedsrepair%28%29.md): Invokes the user registration to run again so the current user can repair it.
- [deviceRegistrationsNeedsRepair](asauthorizationproviderextensionloginmanager/deviceregistrationsneedsrepair%28%29.md): Invokes the device registration to run again so the current user can repair it.
- [resetKeys](asauthorizationproviderextensionloginmanager/resetkeys%28%29.md): Creates new encryption, signing, and Secure Enclave keys.

### Instance Properties

- [extensionData](asauthorizationproviderextensionloginmanager/extensiondata.md)
- [userLoginConfiguration](asauthorizationproviderextensionloginmanager/userloginconfiguration.md)
- [authenticationMethod](asauthorizationproviderextensionloginmanager/authenticationmethod.md)

### Instance Methods

- [decryptionKeysNeedRepair](asauthorizationproviderextensionloginmanager/decryptionkeysneedrepair%28%29.md)
- [resetDeviceKeys](asauthorizationproviderextensionloginmanager/resetdevicekeys%28%29.md)
- [resetUserSecureEnclaveKey](asauthorizationproviderextensionloginmanager/resetusersecureenclavekey%28%29.md)
- [saveUserLoginConfiguration:error:](asauthorizationproviderextensionloginmanager/saveuserloginconfiguration%28__%29.md)
- [attestKey:clientDataHash:completion:](asauthorizationproviderextensionloginmanager/attestkey_clientdatahash_completion_.md)
- [attestPendingKey:clientDataHash:completion:](asauthorizationproviderextensionloginmanager/attestpendingkey_clientdatahash_completion_.md)
- [beginKeyRotationForKeyType:](asauthorizationproviderextensionloginmanager/beginkeyrotation%28__%29.md)
- [completeKeyRotationForKeyType:](asauthorizationproviderextensionloginmanager/completekeyrotation%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuration

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md): Specify how Platform SSO authenticates with the identity provider.
- [ASAuthorizationProviderExtensionLoginConfiguration](asauthorizationproviderextensionloginconfiguration.md): An interface for configuring platform single sign-on.
