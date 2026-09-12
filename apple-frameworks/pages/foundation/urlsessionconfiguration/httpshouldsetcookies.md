> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/httpshouldsetcookies](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/httpshouldsetcookies)

# httpShouldSetCookies (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether requests should contain cookies from the cookie store.

## Declaration

```swift
var httpShouldSetCookies: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls whether tasks within sessions based on this configuration should automatically provide cookies from the shared cookie store when making requests.

If you want to provide cookies yourself, set this value to [false](https://developer.apple.com/documentation/swift/false) and provide a `Cookie` header either through the session’s [httpAdditionalHeaders](httpadditionalheaders.md) property or on a per-request level using a custom [NSURLRequest](../nsurlrequest.md) object.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting cookie policies

- [httpCookieAcceptPolicy](httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [httpCookieStorage](httpcookiestorage.md): The cookie store for storing cookies within this session.
- [HTTPCookie](../httpcookie.md): A representation of an HTTP cookie.

# HTTPShouldSetCookies (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether requests should contain cookies from the cookie store.

## Declaration

```objectivec
@property BOOL HTTPShouldSetCookies;
```

<a id="Discussion"></a>

## Discussion

This property controls whether tasks within sessions based on this configuration should automatically provide cookies from the shared cookie store when making requests.

If you want to provide cookies yourself, set this value to [false](https://developer.apple.com/documentation/swift/false) and provide a `Cookie` header either through the session’s [HTTPAdditionalHeaders](httpadditionalheaders.md) property or on a per-request level using a custom [NSURLRequest](../nsurlrequest.md) object.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting cookie policies

- [HTTPCookieAcceptPolicy](httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [HTTPCookieStorage](httpcookiestorage.md): The cookie store for storing cookies within this session.
- [NSHTTPCookie](../httpcookie.md): A representation of an HTTP cookie.
