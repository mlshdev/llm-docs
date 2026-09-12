> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/registrationtoken](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/registrationtoken)

# registrationToken (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The device registration token from the mobile device management profile.

## Declaration

```swift
var registrationToken: String? { get }
```

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [presentRegistrationViewController(completion:)](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate(\_:keyType:)](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration(\_:)](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

# registrationToken (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The device registration token from the mobile device management profile.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * registrationToken;
```

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [presentRegistrationViewControllerWithCompletion:](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate:keyType:](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration:error:](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.
