> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestringpolicy/samesitelax](https://developer.apple.com/documentation/foundation/httpcookiestringpolicy/samesitelax)

# sameSiteLax (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A policy that allows certain cross-site requests to include the cookie.

## Declaration

```swift
static let sameSiteLax: HTTPCookieStringPolicy
```

<a id="Discussion"></a>

## Discussion

When a cookie has this policy, a request includes the cookie if the request is “top-level,”, meaning one that changes the URL in the address bar.

## See Also

### Policies

- [sameSiteStrict](samesitestrict.md): A policy that prohibits a cross-site request from including the cookie.

# NSHTTPCookieSameSiteLax (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A policy that allows certain cross-site requests to include the cookie.

## Declaration

```objectivec
extern NSHTTPCookieStringPolicy const NSHTTPCookieSameSiteLax;
```

<a id="Discussion"></a>

## Discussion

When a cookie has this policy, a request includes the cookie if the request is “top-level,”, meaning one that changes the URL in the address bar.

## See Also

### Policies

- [NSHTTPCookieSameSiteStrict](samesitestrict.md): A policy that prohibits a cross-site request from including the cookie.
