> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestringpolicy](https://developer.apple.com/documentation/foundation/httpcookiestringpolicy)

# HTTPCookieStringPolicy (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

## Declaration

```swift
struct HTTPCookieStringPolicy
```

<a id="Discussion"></a>

## Discussion

[RFC 6265](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00) defines “same site” as the registerable domain of a URI.

## Topics

### Creating a policy

- [init(rawValue:)](httpcookiestringpolicy/init%28rawvalue_%29.md): Creates an HTTP cookie string policy from the given raw string.

### Policies

- [sameSiteStrict](httpcookiestringpolicy/samesitestrict.md): A policy that prohibits a cross-site request from including the cookie.
- [sameSiteLax](httpcookiestringpolicy/samesitelax.md): A policy that allows certain cross-site requests to include the cookie.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Securing cookies

- [isHTTPOnly](httpcookie/ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [isSecure](httpcookie/issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](httpcookie/samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.

# NSHTTPCookieStringPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

## Declaration

```objectivec
typedef NSString * NSHTTPCookieStringPolicy;
```

<a id="Discussion"></a>

## Discussion

[RFC 6265](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00) defines “same site” as the registerable domain of a URI.

## Topics

### Policies

- [NSHTTPCookieSameSiteStrict](httpcookiestringpolicy/samesitestrict.md): A policy that prohibits a cross-site request from including the cookie.
- [NSHTTPCookieSameSiteLax](httpcookiestringpolicy/samesitelax.md): A policy that allows certain cross-site requests to include the cookie.

## See Also

### Securing cookies

- [HTTPOnly](httpcookie/ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [secure](httpcookie/issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](httpcookie/samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
