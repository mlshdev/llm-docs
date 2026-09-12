> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpauthenticationcreatefromresponse(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpauthenticationcreatefromresponse(_:_:))

# CFHTTPAuthenticationCreateFromResponse(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Uses an authentication failure response to create a CFHTTPAuthentication object.

## Declaration

```swift
func CFHTTPAuthenticationCreateFromResponse(_ alloc: CFAllocator?, _ response: CFHTTPMessage) -> Unmanaged<CFHTTPAuthentication>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `response`: Response indicating an authentication failure; usually a 401 or a 407 response.

<a id="return-value"></a>

## Return Value

CFHTTPAuthentication object that can be used for adding credentials to future requests. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function uses a response containing authentication failure information to create a reference to a CFHTTPAuthentication object. You can use the object to add credentials to future requests. You can query the object to get the following information:

- whether it can be used and re-used to authenticate with its corresponding server \[[CFHTTPAuthenticationIsValid(\_:\_:)](cfhttpauthenticationisvalid%28____%29.md)\]
- the authentication method that will be used when it is used to perform an authentication \[[CFHTTPAuthenticationCopyMethod(\_:)](cfhttpauthenticationcopymethod%28__%29.md)\]
- whether it is associated with a particular CFHTTPMessageRef \[[CFHTTPAuthenticationAppliesToRequest(\_:\_:)](cfhttpauthenticationappliestorequest%28____%29.md)
- whether a user name and a password will be required when it is used to perform an authentication \[[CFHTTPAuthenticationRequiresUserNameAndPassword(\_:)](cfhttpauthenticationrequiresusernameandpassword%28__%29.md)\]
- whether an account domain will be required when it is used to perform an authentication \[[CFHTTPAuthenticationRequiresAccountDomain(\_:)](cfhttpauthenticationrequiresaccountdomain%28__%29.md)\]
- whether authentication requests should be sent one at a time to the corresponding server \[[CFHTTPAuthenticationRequiresOrderedRequests(\_:)](cfhttpauthenticationrequiresorderedrequests%28__%29.md)\]
- the namespace (if any) that the domain uses to prompt for a name and password \[[CFHTTPAuthenticationCopyRealm(\_:)](cfhttpauthenticationcopyrealm%28__%29.md)\]
- the domain URLs the instance applies to \[[CFHTTPAuthenticationCopyDomains(\_:)](cfhttpauthenticationcopydomains%28__%29.md)\]

When you have determined what information will be needed to perform the authentication and accumulated that information, call [CFHTTPMessageApplyCredentials(\_:\_:\_:\_:\_:)](cfhttpmessageapplycredentials%28__________%29.md) or [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfhttpmessageapplycredentialdictionary%28________%29.md) to perform the authentication.

## See Also

### HTTP Authentication

- [CFHTTPAuthentication](cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest(\_:\_:)](cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains(\_:)](cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod(\_:)](cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm(\_:)](cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationGetTypeID()](cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid(\_:\_:)](cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresAccountDomain(\_:)](cfhttpauthenticationrequiresaccountdomain%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.
- [CFHTTPAuthenticationRequiresOrderedRequests(\_:)](cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword(\_:)](cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.

# CFHTTPAuthenticationCreateFromResponse (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Uses an authentication failure response to create a CFHTTPAuthentication object.

## Declaration

```objectivec
extern CFHTTPAuthenticationRefCFHTTPAuthenticationCreateFromResponse(CFAllocatorRef alloc, CFHTTPMessageRef response);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `response`: Response indicating an authentication failure; usually a 401 or a 407 response.

<a id="return-value"></a>

## Return Value

CFHTTPAuthentication object that can be used for adding credentials to future requests. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function uses a response containing authentication failure information to create a reference to a CFHTTPAuthentication object. You can use the object to add credentials to future requests. You can query the object to get the following information:

- whether it can be used and re-used to authenticate with its corresponding server \[[CFHTTPAuthenticationIsValid](cfhttpauthenticationisvalid%28____%29.md)\]
- the authentication method that will be used when it is used to perform an authentication \[[CFHTTPAuthenticationCopyMethod](cfhttpauthenticationcopymethod%28__%29.md)\]
- whether it is associated with a particular CFHTTPMessageRef \[[CFHTTPAuthenticationAppliesToRequest](cfhttpauthenticationappliestorequest%28____%29.md)
- whether a user name and a password will be required when it is used to perform an authentication \[[CFHTTPAuthenticationRequiresUserNameAndPassword](cfhttpauthenticationrequiresusernameandpassword%28__%29.md)\]
- whether an account domain will be required when it is used to perform an authentication \[[CFHTTPAuthenticationRequiresAccountDomain](cfhttpauthenticationrequiresaccountdomain%28__%29.md)\]
- whether authentication requests should be sent one at a time to the corresponding server \[[CFHTTPAuthenticationRequiresOrderedRequests](cfhttpauthenticationrequiresorderedrequests%28__%29.md)\]
- the namespace (if any) that the domain uses to prompt for a name and password \[[CFHTTPAuthenticationCopyRealm](cfhttpauthenticationcopyrealm%28__%29.md)\]
- the domain URLs the instance applies to \[[CFHTTPAuthenticationCopyDomains](cfhttpauthenticationcopydomains%28__%29.md)\]

When you have determined what information will be needed to perform the authentication and accumulated that information, call [CFHTTPMessageApplyCredentials](cfhttpmessageapplycredentials%28__________%29.md) or [CFHTTPMessageApplyCredentialDictionary](cfhttpmessageapplycredentialdictionary%28________%29.md) to perform the authentication.

## See Also

### HTTP Authentication

- [CFHTTPAuthenticationRef](cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest](cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains](cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod](cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm](cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationGetTypeID](cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid](cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresAccountDomain](cfhttpauthenticationrequiresaccountdomain%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.
- [CFHTTPAuthenticationRequiresOrderedRequests](cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword](cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.
