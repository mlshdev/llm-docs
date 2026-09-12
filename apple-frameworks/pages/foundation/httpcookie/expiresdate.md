> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/expiresdate](https://developer.apple.com/documentation/foundation/httpcookie/expiresdate)

# expiresDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s expiration date.

## Declaration

```swift
var expiresDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no specific expiration date, as with session-only cookies. The expiration date is the date when the cookie should be deleted.

## See Also

### Determining cookie lifespan

- [isSessionOnly](issessiononly.md): A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).

# expiresDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s expiration date.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * expiresDate;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no specific expiration date, as with session-only cookies. The expiration date is the date when the cookie should be deleted.

## See Also

### Determining cookie lifespan

- [sessionOnly](issessiononly.md): A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).
