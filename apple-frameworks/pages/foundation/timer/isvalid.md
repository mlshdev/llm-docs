> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/isvalid](https://developer.apple.com/documentation/foundation/timer/isvalid)

# isValid (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the timer is currently valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is still capable of firing or [false](https://developer.apple.com/documentation/swift/false) if the timer has been invalidated and is no longer capable of firing.

## See Also

### Retrieving Timer Information

- [fireDate](firedate.md): The date at which the timer will fire.
- [timeInterval](timeinterval.md): The timer’s time interval, in seconds.
- [userInfo](userinfo.md): The receiver’s `userInfo` object.

# valid (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the timer is currently valid.

## Declaration

```objectivec
@property (readonly, getter=isValid) BOOL valid;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is still capable of firing or [false](https://developer.apple.com/documentation/swift/false) if the timer has been invalidated and is no longer capable of firing.

## See Also

### Retrieving Timer Information

- [fireDate](firedate.md): The date at which the timer will fire.
- [timeInterval](timeinterval.md): The timer’s time interval, in seconds.
- [userInfo](userinfo.md): The receiver’s `userInfo` object.
