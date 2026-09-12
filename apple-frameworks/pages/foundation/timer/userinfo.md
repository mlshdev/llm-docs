> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/userinfo](https://developer.apple.com/documentation/foundation/timer/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s `userInfo` object.

## Declaration

```swift
var userInfo: Any? { get }
```

<a id="Discussion"></a>

## Discussion

Do not access this property after the timer is invalidated. Use [isValid](isvalid.md) to test whether the timer is valid.

## See Also

### Related Documentation

- [init(timeInterval:target:selector:userInfo:repeats:)](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [scheduledTimer(timeInterval:target:selector:userInfo:repeats:)](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [invalidate()](invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.

### Retrieving Timer Information

- [isValid](isvalid.md): A Boolean value that indicates whether the timer is currently valid.
- [fireDate](firedate.md): The date at which the timer will fire.
- [timeInterval](timeinterval.md): The timer’s time interval, in seconds.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s `userInfo` object.

## Declaration

```objectivec
@property (retain, readonly, nullable) id userInfo;
```

<a id="Discussion"></a>

## Discussion

Do not access this property after the timer is invalidated. Use [valid](isvalid.md) to test whether the timer is valid.

## See Also

### Related Documentation

- [timerWithTimeInterval:target:selector:userInfo:repeats:](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [invalidate](invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.

### Retrieving Timer Information

- [valid](isvalid.md): A Boolean value that indicates whether the timer is currently valid.
- [fireDate](firedate.md): The date at which the timer will fire.
- [timeInterval](timeinterval.md): The timer’s time interval, in seconds.
