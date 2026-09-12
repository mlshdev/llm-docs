> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/customloginrequestvalues](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/customloginrequestvalues)

# customLoginRequestValues (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

Provider-supplied values to add to the login POST request body.

## Declaration

```swift
var customLoginRequestValues: [URLQueryItem] { get set }
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims(\_:)](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims(\_:)](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims(\_:)](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

# customLoginRequestValues (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

Provider-supplied values to add to the login POST request body.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSURLQueryItem *> * customLoginRequestValues;
```

## Mentioned In

- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims:returningError:](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims:returningError:](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims:returningError:](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.
