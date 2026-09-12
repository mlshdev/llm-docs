> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/issecure](https://developer.apple.com/documentation/foundation/httpcookie/issecure)

# isSecure (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie may only be sent over secure channels.

## Declaration

```swift
var isSecure: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if this cookie should only be sent over secure channels, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Securing cookies

- [isHTTPOnly](ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [sameSitePolicy](samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [HTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

# secure (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie may only be sent over secure channels.

## Declaration

```objectivec
@property (readonly, getter=isSecure) BOOL secure;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if this cookie should only be sent over secure channels, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Securing cookies

- [HTTPOnly](ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [sameSitePolicy](samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [NSHTTPCookieStringPolicy](../httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.
