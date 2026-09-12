> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/ishttponly](https://developer.apple.com/documentation/foundation/httpcookie/ishttponly)

# isHTTPOnly (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie should only be sent to HTTP servers.

## Declaration

```swift
var isHTTPOnly: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cookie should only be sent using HTTP headers, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Cookies can be marked as HTTP-only by a server (or by JavaScript code). Cookies marked as such must only be sent via HTTP Headers in HTTP requests for URLs that match both the path and domain of the respective cookies.

> **Note**

>  [RFC 6265](https://tools.ietf.org/html/rfc6265) formally defines the `HttpOnly` attribute.

> **Important**

>  To prevent cross-site scripting vulnerabilities, don’t deliver cookies marked as HTTP-only to JavaScript code.

## See Also

### Securing cookies

- [isSecure](issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [HTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

# HTTPOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie should only be sent to HTTP servers.

## Declaration

```objectivec
@property (readonly, getter=isHTTPOnly) BOOL HTTPOnly;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cookie should only be sent using HTTP headers, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Cookies can be marked as HTTP-only by a server (or by JavaScript code). Cookies marked as such must only be sent via HTTP Headers in HTTP requests for URLs that match both the path and domain of the respective cookies.

> **Note**

>  [RFC 6265](https://tools.ietf.org/html/rfc6265) formally defines the `HttpOnly` attribute.

> **Important**

>  To prevent cross-site scripting vulnerabilities, don’t deliver cookies marked as HTTP-only to JavaScript code.

## See Also

### Securing cookies

- [secure](issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [NSHTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.
