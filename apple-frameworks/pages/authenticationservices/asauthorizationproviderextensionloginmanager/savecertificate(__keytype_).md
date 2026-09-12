> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/savecertificate(_:keytype:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/savecertificate(_:keytype:))

# saveCertificate(\_:keyType:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Saves the provided certificate for the key type.

## Declaration

```swift
func saveCertificate(_ certificate: SecCertificate, keyType: ASAuthorizationProviderExtensionKeyType)
```

## Parameters

- `certificate`: The certificate to save.
- `keyType`: The key type for the certificate.

## Mentioned In

- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewController(completion:)](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveLoginConfiguration(\_:)](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

# saveCertificate:keyType: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Saves the provided certificate for the key type.

## Declaration

```objectivec
- (void) saveCertificate:(SecCertificateRef) certificate keyType:(ASAuthorizationProviderExtensionKeyType) keyType;
```

## Parameters

- `certificate`: The certificate to save.
- `keyType`: The key type for the certificate.

## Mentioned In

- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewControllerWithCompletion:](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveLoginConfiguration:error:](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.
