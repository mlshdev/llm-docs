> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/isuserregistered](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/isuserregistered)

# isUserRegistered (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the user completes registration.

## Declaration

```swift
var isUserRegistered: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the user completes registration.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isDeviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [identity(for:)](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

# userRegistered (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the user completes registration.

## Declaration

```objectivec
@property (readonly, getter=isUserRegistered) BOOL userRegistered;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the user completes registration.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [deviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyIdentityForKeyType:](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.
