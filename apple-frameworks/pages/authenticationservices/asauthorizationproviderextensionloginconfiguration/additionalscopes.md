> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/additionalscopes](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/additionalscopes)

# additionalScopes (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A set of extra scopes to add to the base for the authentication request.

## Declaration

```swift
var additionalScopes: String { get set }
```

## Mentioned In

- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

The base value is `openid offline_access`. The system appends any additional values. The default additional scope is `urn:apple:platformsso`.

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims(\_:)](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims(\_:)](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims(\_:)](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

# additionalScopes (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A set of extra scopes to add to the base for the authentication request.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * additionalScopes;
```

## Mentioned In

- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

The base value is `openid offline_access`. The system appends any additional values. The default additional scope is `urn:apple:platformsso`.

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims:returningError:](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims:returningError:](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims:returningError:](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.
