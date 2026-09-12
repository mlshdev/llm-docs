> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/init(fireat:interval:target:selector:userinfo:repeats:)](https://developer.apple.com/documentation/foundation/timer/init(fireat:interval:target:selector:userinfo:repeats:))

# init(fireAt:interval:target:selector:userInfo:repeats:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a timer using the specified object and selector.

## Declaration

```swift
init(fireAt date: Date, interval ti: TimeInterval, target t: Any, selector s: Selector, userInfo ui: Any?, repeats rep: Bool)
```

## Parameters

- `date`: The time at which the timer should first fire.
- `ti`: For a repeating timer, this parameter contains the number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `t`: The object to which to send the message specified by `aSelector` when the timer fires. The timer maintains a strong reference to this object until it (the timer) is invalidated.
- `s`: The message to send to `target` when the timer fires.

  The selector should have the following signature: `timerFireMethod:` (including a colon to indicate that the method takes an argument). The timer passes itself as the argument, thus the method would adopt the following pattern:

  ```objc
  - (void)timerFireMethod:(NSTimer *)timer
  ```
- `ui`: Custom user info for the timer. The timer maintains a strong reference to this object until it (the timer) is invalidated. This parameter may be `nil`.
- `rep`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

The receiver, initialized such that, when added to a run loop, it will fire at `date` and then, if `repeats` is [true](https://developer.apple.com/documentation/swift/true), every `ti` after that.

<a id="Discussion"></a>

## Discussion

You must add the new timer to a run loop, using [add(\_:forMode:)](../runloop/add%28__formode_%29-392ag.md). Upon firing, the timer sends the message `aSelector` to `target`. (If the timer is configured to repeat, there is no need to subsequently re-add the timer to the run loop.)

## See Also

### Creating a Timer

- [scheduledTimer(withTimeInterval:repeats:block:)](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:target:selector:userInfo:repeats:)](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:invocation:repeats:)](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [init(timeInterval:repeats:block:)](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [init(timeInterval:target:selector:userInfo:repeats:)](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [init(timeInterval:invocation:repeats:)](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [init(fire:interval:repeats:block:)](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.

# initWithFireDate:interval:target:selector:userInfo:repeats: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a timer using the specified object and selector.

## Declaration

```objectivec
- (instancetype) initWithFireDate:(NSDate *) date interval:(NSTimeInterval) ti target:(id) t selector:(SEL) s userInfo:(id) ui repeats:(BOOL) rep;
```

## Parameters

- `date`: The time at which the timer should first fire.
- `ti`: For a repeating timer, this parameter contains the number of seconds between firings of the timer. If `ti` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `t`: The object to which to send the message specified by `aSelector` when the timer fires. The timer maintains a strong reference to this object until it (the timer) is invalidated.
- `s`: The message to send to `target` when the timer fires.

  The selector should have the following signature: `timerFireMethod:` (including a colon to indicate that the method takes an argument). The timer passes itself as the argument, thus the method would adopt the following pattern:

  ```objc
  - (void)timerFireMethod:(NSTimer *)timer
  ```
- `ui`: Custom user info for the timer. The timer maintains a strong reference to this object until it (the timer) is invalidated. This parameter may be `nil`.
- `rep`: If [true](https://developer.apple.com/documentation/swift/true), the timer will repeatedly reschedule itself until invalidated. If [false](https://developer.apple.com/documentation/swift/false), the timer will be invalidated after it fires.

<a id="return-value"></a>

## Return Value

The receiver, initialized such that, when added to a run loop, it will fire at `date` and then, if `repeats` is [true](https://developer.apple.com/documentation/swift/true), every `ti` after that.

<a id="Discussion"></a>

## Discussion

You must add the new timer to a run loop, using [addTimer:forMode:](../runloop/add%28__formode_%29-392ag.md). Upon firing, the timer sends the message `aSelector` to `target`. (If the timer is configured to repeat, there is no need to subsequently re-add the timer to the run loop.)

## See Also

### Creating a Timer

- [scheduledTimerWithTimeInterval:repeats:block:](scheduledtimer%28withtimeinterval_repeats_block_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:invocation:repeats:](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [timerWithTimeInterval:repeats:block:](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [timerWithTimeInterval:target:selector:userInfo:repeats:](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [timerWithTimeInterval:invocation:repeats:](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [initWithFireDate:interval:repeats:block:](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
