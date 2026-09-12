> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/saveloginconfiguration(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/saveloginconfiguration(_:))

# saveLoginConfiguration(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Saves or replaces the login configuration.

## Declaration

```swift
func saveLoginConfiguration(_ loginConfiguration: ASAuthorizationProviderExtensionLoginConfiguration) throws
```

## Parameters

- `loginConfiguration`: The login configuration to save or replace.

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewController(completion:)](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate(\_:keyType:)](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.

# saveLoginConfiguration:error: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Saves or replaces the login configuration.

## Declaration

```objectivec
- (BOOL) saveLoginConfiguration:(ASAuthorizationProviderExtensionLoginConfiguration *) loginConfiguration error:(NSError **) error;
```

## Parameters

- `loginConfiguration`: The login configuration to save or replace.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewControllerWithCompletion:](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate:keyType:](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
