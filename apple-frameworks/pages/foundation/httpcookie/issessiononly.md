> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/issessiononly](https://developer.apple.com/documentation/foundation/httpcookie/issessiononly)

# isSessionOnly (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).

## Declaration

```swift
var isSessionOnly: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the cookie should be discarded at the end of the session (regardless of expiration date), otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining cookie lifespan

- [expiresDate](expiresdate.md): The cookie’s expiration date.

# sessionOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).

## Declaration

```objectivec
@property (readonly, getter=isSessionOnly) BOOL sessionOnly;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the cookie should be discarded at the end of the session (regardless of expiration date), otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining cookie lifespan

- [expiresDate](expiresdate.md): The cookie’s expiration date.
