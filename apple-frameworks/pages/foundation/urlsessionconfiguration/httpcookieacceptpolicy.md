> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/httpcookieacceptpolicy](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/httpcookieacceptpolicy)

# httpCookieAcceptPolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A policy constant that determines when cookies should be accepted.

## Declaration

```swift
var httpCookieAcceptPolicy: HTTPCookie.AcceptPolicy { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the cookie accept policy for all tasks within sessions based on this configuration.

The default value is [HTTPCookie.AcceptPolicy.onlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md). You can change it to any of the constants defined in the [HTTPCookie.AcceptPolicy](../httpcookie/acceptpolicy.md) enumerated type.

If you want more direct control over what cookies are accepted, set this value to [HTTPCookie.AcceptPolicy.never](../httpcookie/acceptpolicy/never.md) and then use the [allHeaderFields](../httpurlresponse/allheaderfields.md) and [cookies(withResponseHeaderFields:for:)](../httpcookie/cookies%28withresponseheaderfields_for_%29.md) methods to extract cookies from the URL response object yourself.

## See Also

### Setting cookie policies

- [httpShouldSetCookies](httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [httpCookieStorage](httpcookiestorage.md): The cookie store for storing cookies within this session.
- [HTTPCookie](../httpcookie.md): A representation of an HTTP cookie.

# HTTPCookieAcceptPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A policy constant that determines when cookies should be accepted.

## Declaration

```objectivec
@property NSHTTPCookieAcceptPolicy HTTPCookieAcceptPolicy;
```

<a id="Discussion"></a>

## Discussion

This property determines the cookie accept policy for all tasks within sessions based on this configuration.

The default value is [NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md). You can change it to any of the constants defined in the [NSHTTPCookieAcceptPolicy](../httpcookie/acceptpolicy.md) enumerated type.

If you want more direct control over what cookies are accepted, set this value to [NSHTTPCookieAcceptPolicyNever](../httpcookie/acceptpolicy/never.md) and then use the [allHeaderFields](../httpurlresponse/allheaderfields.md) and [cookiesWithResponseHeaderFields:forURL:](../httpcookie/cookies%28withresponseheaderfields_for_%29.md) methods to extract cookies from the URL response object yourself.

## See Also

### Setting cookie policies

- [HTTPShouldSetCookies](httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [HTTPCookieStorage](httpcookiestorage.md): The cookie store for storing cookies within this session.
- [NSHTTPCookie](../httpcookie.md): A representation of an HTTP cookie.
