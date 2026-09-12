> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestbodyclaims(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestbodyclaims(_:))

# setCustomAssertionRequestBodyClaims(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Adds the custom claims to the embedded assertion request body.

## Declaration

```swift
func setCustomAssertionRequestBodyClaims(_ claims: [String : Any]) throws
```

## Parameters

- `claims`: The claims to add. The request must serialize as valid JSON for the system to accept it.

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims(\_:)](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims(\_:)](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

# setCustomAssertionRequestBodyClaims:returningError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Adds the custom claims to the embedded assertion request body.

## Declaration

```objectivec
- (BOOL) setCustomAssertionRequestBodyClaims:(NSDictionary<NSString *,id> *) claims returningError:(NSError **) error;
```

## Parameters

- `claims`: The claims to add. The request must serialize as valid JSON for the system to accept it.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns `true` when successful; otherwise, `false` if the system rejects the claims.

## See Also

### Customizing the authentication request

- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims:returningError:](setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims:returningError:](setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.
