> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/presentregistrationviewcontroller(completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/presentregistrationviewcontroller(completion:))

# presentRegistrationViewController(completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Requests platform single sign-on to show the extension’s view controller to the user.

## Declaration

```swift
func presentRegistrationViewController(completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func presentRegistrationViewController() async throws
```

## Parameters

- `completion`: A completion handler that the method uses to indicate whether the view controller presents successfully, and the specific error if it doesn’t.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

This is only valid during registration. If the system can’t show the controller, the completion returns an error.

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [saveCertificate(\_:keyType:)](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration(\_:)](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.

# presentRegistrationViewControllerWithCompletion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Requests platform single sign-on to show the extension’s view controller to the user.

## Declaration

```objectivec
- (void) presentRegistrationViewControllerWithCompletion:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: A completion handler that the method uses to indicate whether the view controller presents successfully, and the specific error if it doesn’t.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

This is only valid during registration. If the system can’t show the controller, the completion returns an error.

## See Also

### Performing registration

- [loginUserName](loginusername.md): Deprecated. The user name to use when authenticating with the identity provider.
- [registrationToken](registrationtoken.md): The device registration token from the mobile device management profile.
- [saveCertificate:keyType:](savecertificate%28__keytype_%29.md): Saves the provided certificate for the key type.
- [saveLoginConfiguration:error:](saveloginconfiguration%28__%29.md): Saves or replaces the login configuration.
