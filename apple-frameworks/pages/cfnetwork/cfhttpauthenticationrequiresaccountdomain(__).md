> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpauthenticationrequiresaccountdomain(_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpauthenticationrequiresaccountdomain(_:))

# CFHTTPAuthenticationRequiresAccountDomain(\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.

## Declaration

```swift
func CFHTTPAuthenticationRequiresAccountDomain(_ auth: CFHTTPAuthentication) -> Bool
```

## Parameters

- `auth`: The CFHTTPAuthentication object to examine.

<a id="return-value"></a>

## Return Value

`TRUE` if `auth` uses an authentication method that requires an account domain, otherwise `FALSE`.

## See Also

### HTTP Authentication

- [CFHTTPAuthentication](cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest(\_:\_:)](cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains(\_:)](cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod(\_:)](cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm(\_:)](cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationCreateFromResponse(\_:\_:)](cfhttpauthenticationcreatefromresponse%28____%29.md): Uses an authentication failure response to create a CFHTTPAuthentication object.
- [CFHTTPAuthenticationGetTypeID()](cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid(\_:\_:)](cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresOrderedRequests(\_:)](cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword(\_:)](cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.

# CFHTTPAuthenticationRequiresAccountDomain (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.

## Declaration

```objectivec
extern Boolean CFHTTPAuthenticationRequiresAccountDomain(CFHTTPAuthenticationRef auth);
```

## Parameters

- `auth`: The CFHTTPAuthentication object to examine.

<a id="return-value"></a>

## Return Value

`TRUE` if `auth` uses an authentication method that requires an account domain, otherwise `FALSE`.

## See Also

### HTTP Authentication

- [CFHTTPAuthenticationRef](cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest](cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains](cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod](cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm](cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationCreateFromResponse](cfhttpauthenticationcreatefromresponse%28____%29.md): Uses an authentication failure response to create a CFHTTPAuthentication object.
- [CFHTTPAuthenticationGetTypeID](cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid](cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresOrderedRequests](cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword](cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.
