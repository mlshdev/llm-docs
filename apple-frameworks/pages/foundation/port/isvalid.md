> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/isvalid](https://developer.apple.com/documentation/foundation/port/isvalid)

# isValid (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[false](https://developer.apple.com/documentation/swift/false) if the receiver is known to be invalid, otherwise [true](https://developer.apple.com/documentation/swift/true).

An `NSPort` object becomes invalid when its underlying communication resource, which is operating system dependent, is closed or damaged.

## See Also

### Validation

- [invalidate()](invalidate%28%29.md): Marks the receiver as invalid and posts an [didBecomeInvalidNotification](didbecomeinvalidnotification.md) to the default notification center.

# valid (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is valid.

## Declaration

```objectivec
@property (readonly, getter=isValid) BOOL valid;
```

<a id="Discussion"></a>

## Discussion

[false](https://developer.apple.com/documentation/swift/false) if the receiver is known to be invalid, otherwise [true](https://developer.apple.com/documentation/swift/true).

An `NSPort` object becomes invalid when its underlying communication resource, which is operating system dependent, is closed or damaged.

## See Also

### Validation

- [invalidate](invalidate%28%29.md): Marks the receiver as invalid and posts an [NSPortDidBecomeInvalidNotification](didbecomeinvalidnotification.md) to the default notification center.
