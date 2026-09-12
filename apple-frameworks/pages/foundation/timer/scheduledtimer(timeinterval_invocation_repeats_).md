> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/scheduledtimer(timeinterval:invocation:repeats:)](https://developer.apple.com/documentation/foundation/timer/scheduledtimer(timeinterval:invocation:repeats:))

# scheduledTimer(timeInterval:invocation:repeats:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new timer and schedules it on the current run loop in the default mode.

## Declaration

```swift
class func scheduledTimer(timeInterval ti: TimeInterval, invocation: NSInvocation, repeats yesOrNo: Bool) -> Timer
```

## Parameters

- `ti`: The number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `invocation`: The invocation to use when the timer fires. The invocation object maintains a strong reference to its arguments until the timer is invalidated.
- `yesOrNo`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

After `ti` seconds have elapsed, the timer fires, invoking `invocation`.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [Timer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Timers/Timers.html#//apple_ref/doc/uid/10000061i)

### Creating a Timer

- [scheduledTimer(withTimeInterval:repeats:block:)](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:target:selector:userInfo:repeats:)](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [init(timeInterval:repeats:block:)](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [init(timeInterval:target:selector:userInfo:repeats:)](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [init(timeInterval:invocation:repeats:)](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [init(fire:interval:repeats:block:)](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [init(fireAt:interval:target:selector:userInfo:repeats:)](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.

# scheduledTimerWithTimeInterval:invocation:repeats: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new timer and schedules it on the current run loop in the default mode.

## Declaration

```objectivec
+ (NSTimer *) scheduledTimerWithTimeInterval:(NSTimeInterval) ti invocation:(NSInvocation *) invocation repeats:(BOOL) yesOrNo;
```

## Parameters

- `ti`: The number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `invocation`: The invocation to use when the timer fires. The invocation object maintains a strong reference to its arguments until the timer is invalidated.
- `yesOrNo`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

After `ti` seconds have elapsed, the timer fires, invoking `invocation`.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [Timer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Timers/Timers.html#//apple_ref/doc/uid/10000061i)

### Creating a Timer

- [scheduledTimerWithTimeInterval:repeats:block:](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [timerWithTimeInterval:repeats:block:](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [timerWithTimeInterval:target:selector:userInfo:repeats:](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [timerWithTimeInterval:invocation:repeats:](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [initWithFireDate:interval:repeats:block:](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [initWithFireDate:interval:target:selector:userInfo:repeats:](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.
