> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/invalidcredentialpredicate](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/invalidcredentialpredicate)

# invalidCredentialPredicate (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The predicate string that identifies invalid credential errors.

## Declaration

```swift
var invalidCredentialPredicate: String? { get set }
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](../creating-a-json-web-encryption-jwe-login-response.md)

<a id="Discussion"></a>

## Discussion

If the server returns an HTTP 400 or HTTP 401 error when authenticating, the system uses this predicate on the response body JSON. It then determines whether the error is due to an invalid password. If this predicate is `nil`, an HTTP 401 error indicates an invalid credential.

## See Also

### Obtaining the recommended configuration

- [accountDisplayName](accountdisplayname.md): The display name for the account.

# invalidCredentialPredicate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The predicate string that identifies invalid credential errors.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * invalidCredentialPredicate;
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](../creating-a-json-web-encryption-jwe-login-response.md)

<a id="Discussion"></a>

## Discussion

If the server returns an HTTP 400 or HTTP 401 error when authenticating, the system uses this predicate on the response body JSON. It then determines whether the error is due to an invalid password. If this predicate is `nil`, an HTTP 401 error indicates an invalid credential.

## See Also

### Obtaining the recommended configuration

- [accountDisplayName](accountdisplayname.md): The display name for the account.
