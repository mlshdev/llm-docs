> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/includepreviousrefreshtokeninloginrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/includepreviousrefreshtokeninloginrequest)

# includePreviousRefreshTokenInLoginRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether to include the previous refresh token in the authentation request.

## Declaration

```swift
var includePreviousRefreshTokenInLoginRequest: Bool { get set }
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

If the value is `true` and there’s a `refresh_token` for the user in the SSO tokens, it’s included in the authentication request.

## See Also

### Configuring the previous refresh token

- [previousRefreshTokenClaimName](previousrefreshtokenclaimname.md): The claim name for the previous single sign-on token value in the authentication request.

# includePreviousRefreshTokenInLoginRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether to include the previous refresh token in the authentation request.

## Declaration

```objectivec
@property (nonatomic) BOOL includePreviousRefreshTokenInLoginRequest;
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

If the value is `true` and there’s a `refresh_token` for the user in the SSO tokens, it’s included in the authentication request.

## See Also

### Configuring the previous refresh token

- [previousRefreshTokenClaimName](previousrefreshtokenclaimname.md): The claim name for the previous single sign-on token value in the authentication request.
