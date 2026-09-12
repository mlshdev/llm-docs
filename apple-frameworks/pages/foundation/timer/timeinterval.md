> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/timeinterval](https://developer.apple.com/documentation/foundation/timer/timeinterval)

# timeInterval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The timer’s time interval, in seconds.

## Declaration

```swift
var timeInterval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If the timer is non-repeating, returns `0` even if a time interval was set.

## See Also

### Retrieving Timer Information

- [isValid](isvalid.md): A Boolean value that indicates whether the timer is currently valid.
- [fireDate](firedate.md): The date at which the timer will fire.
- [userInfo](userinfo.md): The receiver’s `userInfo` object.

# timeInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The timer’s time interval, in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeInterval;
```

<a id="Discussion"></a>

## Discussion

If the timer is non-repeating, returns `0` even if a time interval was set.

## See Also

### Retrieving Timer Information

- [valid](isvalid.md): A Boolean value that indicates whether the timer is currently valid.
- [fireDate](firedate.md): The date at which the timer will fire.
- [userInfo](userinfo.md): The receiver’s `userInfo` object.
