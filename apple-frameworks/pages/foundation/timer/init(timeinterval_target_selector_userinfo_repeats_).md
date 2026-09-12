> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/init(timeinterval:target:selector:userinfo:repeats:)](https://developer.apple.com/documentation/foundation/timer/init(timeinterval:target:selector:userinfo:repeats:))

# init(timeInterval:target:selector:userInfo:repeats:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a timer object with the specified object and selector.

## Declaration

```swift
init(timeInterval ti: TimeInterval, target aTarget: Any, selector aSelector: Selector, userInfo: Any?, repeats yesOrNo: Bool)
```

## Parameters

- `ti`: The number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `aTarget`: The object to which to send the message specified by `aSelector` when the timer fires. The timer maintains a strong reference to this object until it (the timer) is invalidated.
- `aSelector`: The message to send to `target` when the timer fires.

  The selector should have the following signature: `timerFireMethod:` (including a colon to indicate that the method takes an argument). The timer passes itself as the argument, thus the method would adopt the following pattern:

  ```objc
  - (void)timerFireMethod:(NSTimer *)timer
  ```
- `userInfo`: Custom user info for the timer.

  The timer maintains a strong reference to this object until it (the timer) is invalidated. This parameter may be `nil`.
- `yesOrNo`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

You must add the new timer to a run loop, using [add(\_:forMode:)](../runloop/add%28__formode_%29-392ag.md). Then, after `ti` seconds have elapsed, the timer fires, sending the message `aSelector` to `target`. (If the timer is configured to repeat, there is no need to subsequently re-add the timer to the run loop.)

## See Also

### Creating a Timer

- [scheduledTimer(withTimeInterval:repeats:block:)](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:target:selector:userInfo:repeats:)](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:invocation:repeats:)](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [init(timeInterval:repeats:block:)](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [init(timeInterval:invocation:repeats:)](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [init(fire:interval:repeats:block:)](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [init(fireAt:interval:target:selector:userInfo:repeats:)](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.

# timerWithTimeInterval:target:selector:userInfo:repeats: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a timer object with the specified object and selector.

## Declaration

```objectivec
+ (NSTimer *) timerWithTimeInterval:(NSTimeInterval) ti target:(id) aTarget selector:(SEL) aSelector userInfo:(id) userInfo repeats:(BOOL) yesOrNo;
```

## Parameters

- `ti`: The number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `aTarget`: The object to which to send the message specified by `aSelector` when the timer fires. The timer maintains a strong reference to this object until it (the timer) is invalidated.
- `aSelector`: The message to send to `target` when the timer fires.

  The selector should have the following signature: `timerFireMethod:` (including a colon to indicate that the method takes an argument). The timer passes itself as the argument, thus the method would adopt the following pattern:

  ```objc
  - (void)timerFireMethod:(NSTimer *)timer
  ```
- `userInfo`: Custom user info for the timer.

  The timer maintains a strong reference to this object until it (the timer) is invalidated. This parameter may be `nil`.
- `yesOrNo`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

You must add the new timer to a run loop, using [addTimer:forMode:](../runloop/add%28__formode_%29-392ag.md). Then, after `ti` seconds have elapsed, the timer fires, sending the message `aSelector` to `target`. (If the timer is configured to repeat, there is no need to subsequently re-add the timer to the run loop.)

## See Also

### Creating a Timer

- [scheduledTimerWithTimeInterval:repeats:block:](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:invocation:repeats:](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [timerWithTimeInterval:repeats:block:](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [timerWithTimeInterval:invocation:repeats:](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [initWithFireDate:interval:repeats:block:](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [initWithFireDate:interval:target:selector:userInfo:repeats:](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.
