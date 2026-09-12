> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountcredential](https://developer.apple.com/documentation/accounts/acaccountcredential)

# ACAccountCredential (Swift)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A credential object that encapsulates the information needed to authenticate a user.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
class ACAccountCredential
```

<a id="overview"></a>

## Overview

To create an account credential that uses the OAuth open authentication standard, use the [init(oAuthToken:tokenSecret:)](acaccountcredential/init%28oauthtoken_tokensecret_%29-6bfyf.md) method.

## Topics

### Initializing Credentials

- [init(oAuthToken:tokenSecret:)](acaccountcredential/init%28oauthtoken_tokensecret_%29-6bfyf.md): Deprecated. Initializes an account credential using OAuth.
- [init(oAuth2Token:refreshToken:expiryDate:)](acaccountcredential/init%28oauth2token_refreshtoken_expirydate_%29-67hmd.md): Deprecated. Initializes an account credential using OAuth 2.

### Accessing Credential Properties

- [oauthToken](acaccountcredential/oauthtoken.md): Deprecated. The token used for the credential.

### Initializers

- [init(OAuth2Token:refreshToken:expiryDate:)](acaccountcredential/init%28oauth2token_refreshtoken_expirydate_%29-8r1ys.md): Deprecated.
- [init(OAuthToken:tokenSecret:)](acaccountcredential/init%28oauthtoken_tokensecret_%29-6328w.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Account Management

- [ACAccountStore](acaccountstore.md): Deprecated. The object you use to request, manage, and store the user’s account information.
- [ACAccount](acaccount.md): Deprecated. The information associated with one of the user’s accounts.

# ACAccountCredential (Objective-C)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A credential object that encapsulates the information needed to authenticate a user.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@interface ACAccountCredential : NSObject
```

<a id="overview"></a>

## Overview

To create an account credential that uses the OAuth open authentication standard, use the [initWithOAuthToken:tokenSecret:](acaccountcredential/init%28oauthtoken_tokensecret_%29-6bfyf.md) method.

## Topics

### Initializing Credentials

- [initWithOAuthToken:tokenSecret:](acaccountcredential/init%28oauthtoken_tokensecret_%29-6bfyf.md): Deprecated. Initializes an account credential using OAuth.
- [initWithOAuth2Token:refreshToken:expiryDate:](acaccountcredential/init%28oauth2token_refreshtoken_expirydate_%29-67hmd.md): Deprecated. Initializes an account credential using OAuth 2.

### Accessing Credential Properties

- [oauthToken](acaccountcredential/oauthtoken.md): Deprecated. The token used for the credential.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Account Management

- [ACAccountStore](acaccountstore.md): Deprecated. The object you use to request, manage, and store the user’s account information.
- [ACAccount](acaccount.md): Deprecated. The information associated with one of the user’s accounts.
