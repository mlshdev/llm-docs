> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestringpolicy/samesitestrict](https://developer.apple.com/documentation/foundation/httpcookiestringpolicy/samesitestrict)

# sameSiteStrict (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A policy that prohibits a cross-site request from including the cookie.

## Declaration

```swift
static let sameSiteStrict: HTTPCookieStringPolicy
```

## See Also

### Policies

- [sameSiteLax](samesitelax.md): A policy that allows certain cross-site requests to include the cookie.

# NSHTTPCookieSameSiteStrict (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A policy that prohibits a cross-site request from including the cookie.

## Declaration

```objectivec
extern NSHTTPCookieStringPolicy const NSHTTPCookieSameSiteStrict;
```

## See Also

### Policies

- [NSHTTPCookieSameSiteLax](samesitelax.md): A policy that allows certain cross-site requests to include the cookie.
