> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/loginusername](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/loginusername)

# loginUserName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+ (deprecated in 14.0)

The user name to use when authenticating with the identity provider.

## Declaration

```swift
var loginUserName: String? { get set }
```

## See Also

### Performing registration

- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewController(completion:)](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate(\_:keyType:)](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration(\_:)](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

# loginUserName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+ (deprecated in 14.0)

The user name to use when authenticating with the identity provider.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * loginUserName;
```

## See Also

### Performing registration

- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [presentRegistrationViewControllerWithCompletion:](presentregistrationviewcontroller%28completion_%29.md): Requests platform single sign-on to show the extension’s view controller to the user.
- [saveCertificate:keyType:](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration:error:](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.
