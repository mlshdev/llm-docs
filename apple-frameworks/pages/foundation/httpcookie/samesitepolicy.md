> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/samesitepolicy](https://developer.apple.com/documentation/foundation/httpcookie/samesitepolicy)

# sameSitePolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.

## Declaration

```swift
var sameSitePolicy: HTTPCookieStringPolicy? { get }
```

<a id="Discussion"></a>

## Discussion

Along with the policy values defined by [HTTPCookieStringPolicy](../httpcookiestringpolicy.md), this property may also be `nil`. In this case, cross-site requests include the cookie.

## See Also

### Securing cookies

- [isHTTPOnly](ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [isSecure](issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [HTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

# sameSitePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSHTTPCookieStringPolicy sameSitePolicy;
```

<a id="Discussion"></a>

## Discussion

Along with the policy values defined by [NSHTTPCookieStringPolicy](../httpcookiestringpolicy.md), this property may also be `nil`. In this case, cross-site requests include the cookie.

## See Also

### Securing cookies

- [HTTPOnly](ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [secure](issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [NSHTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.
