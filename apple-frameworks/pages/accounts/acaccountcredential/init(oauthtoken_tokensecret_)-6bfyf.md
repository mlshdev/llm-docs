> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountcredential/init(oauthtoken:tokensecret:)-6bfyf](https://developer.apple.com/documentation/accounts/acaccountcredential/init(oauthtoken:tokensecret:)-6bfyf)

# init(oAuthToken:tokenSecret:) (Swift)

**Framework:** Accounts  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Initializes an account credential using OAuth.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
init!(oAuthToken token: String!, tokenSecret secret: String!)
```

## Parameters

- `token`: The client application’s token.
- `secret`: The client application’s secret token.

<a id="return-value"></a>

## Return Value

Newly initialized account credential.

<a id="Discussion"></a>

## Discussion

Accounts can optionally use the OAuth open authentication standard to authenticate your client application. Instead of the user giving their username and password to log in, the server authenticates the user, and your client application receives a token that grants it access to specific resources for a defined duration. The authentication mechanism uses a key and secret scheme similar to the public and private keys used by `ssh`. A token is a unique, random string of letters and numbers that’s paired with a secret to protect the token from being abused. You initialize account credentials using this token and secret token.

To learn more about OAuth, go to [OAuth](http://oauth.net).

## See Also

### Initializing Credentials

- [init(oAuth2Token:refreshToken:expiryDate:)](init%28oauth2token_refreshtoken_expirydate_%29-67hmd.md): Deprecated. Initializes an account credential using OAuth 2.

# initWithOAuthToken:tokenSecret: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Initializes an account credential using OAuth.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (instancetype) initWithOAuthToken:(NSString *) token tokenSecret:(NSString *) secret;
```

## Parameters

- `token`: The client application’s token.
- `secret`: The client application’s secret token.

<a id="return-value"></a>

## Return Value

Newly initialized account credential.

<a id="Discussion"></a>

## Discussion

Accounts can optionally use the OAuth open authentication standard to authenticate your client application. Instead of the user giving their username and password to log in, the server authenticates the user, and your client application receives a token that grants it access to specific resources for a defined duration. The authentication mechanism uses a key and secret scheme similar to the public and private keys used by `ssh`. A token is a unique, random string of letters and numbers that’s paired with a secret to protect the token from being abused. You initialize account credentials using this token and secret token.

To learn more about OAuth, go to [OAuth](http://oauth.net).

## See Also

### Initializing Credentials

- [initWithOAuth2Token:refreshToken:expiryDate:](init%28oauth2token_refreshtoken_expirydate_%29-67hmd.md): Deprecated. Initializes an account credential using OAuth 2.
