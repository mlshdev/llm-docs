> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/previousrefreshtokenclaimname

# previousRefreshTokenClaimName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The claim name for the previous single sign-on token value in the authentication request.

## Declaration

```swift
var previousRefreshTokenClaimName: String { get set }
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Configuring the previous refresh token

- [includePreviousRefreshTokenInLoginRequest](includepreviousrefreshtokeninloginrequest.md): A Boolean value that indicates whether to include the previous refresh token in the authentation request.

# previousRefreshTokenClaimName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The claim name for the previous single sign-on token value in the authentication request.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * previousRefreshTokenClaimName;
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Configuring the previous refresh token

- [includePreviousRefreshTokenInLoginRequest](includepreviousrefreshtokeninloginrequest.md): A Boolean value that indicates whether to include the previous refresh token in the authentation request.
