> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/isdeviceregistered](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/isdeviceregistered)

# isDeviceRegistered (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the device completes registration.

## Declaration

```swift
var isDeviceRegistered: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the current device completes registration.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isUserRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [identity(for:)](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

# deviceRegistered (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the device completes registration.

## Declaration

```objectivec
@property (readonly, getter=isDeviceRegistered) BOOL deviceRegistered;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the current device completes registration.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [userRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyIdentityForKeyType:](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.
