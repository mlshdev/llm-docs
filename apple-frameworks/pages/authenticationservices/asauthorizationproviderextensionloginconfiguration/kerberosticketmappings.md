> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/kerberosticketmappings](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/kerberosticketmappings)

# kerberosTicketMappings (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

## Declaration

```swift
var kerberosTicketMappings: [ASAuthorizationProviderExtensionKerberosMapping] { get set }
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](../creating-a-json-web-encryption-jwe-login-response.md)

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims(\_:)](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims(\_:)](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims(\_:)](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.

# kerberosTicketMappings (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<ASAuthorizationProviderExtensionKerberosMapping *> * kerberosTicketMappings;
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](../creating-a-json-web-encryption-jwe-login-response.md)

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims:returningError:](setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims:returningError:](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims:returningError:](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
