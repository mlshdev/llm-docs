> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/scheduledtimer(withtimeinterval:repeats:block:)](https://developer.apple.com/documentation/foundation/timer/scheduledtimer(withtimeinterval:repeats:block:))

# scheduledTimer(withTimeInterval:repeats:block:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a timer and schedules it on the current run loop in the default mode.

## Declaration

```swift
class func scheduledTimer(withTimeInterval interval: TimeInterval, repeats: Bool, block: @escaping @Sendable (Timer) -> Void) -> Timer
```

## Parameters

- `interval`: The number of seconds between firings of the timer. If `interval` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `repeats`: If `true`, the timer will repeatedly reschedule itself until invalidated. If `false`, the timer will be invalidated after it fires.
- `block`: A block to be executed when the timer fires.

  The block takes a single `NSTimer` parameter and has no return value.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

After `interval` seconds have elapsed, the timer fires, executing `block`.

## See Also

### Creating a Timer

- [scheduledTimer(timeInterval:target:selector:userInfo:repeats:)](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimer(timeInterval:invocation:repeats:)](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [init(timeInterval:repeats:block:)](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [init(timeInterval:target:selector:userInfo:repeats:)](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [init(timeInterval:invocation:repeats:)](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [init(fire:interval:repeats:block:)](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [init(fireAt:interval:target:selector:userInfo:repeats:)](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.

# scheduledTimerWithTimeInterval:repeats:block: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a timer and schedules it on the current run loop in the default mode.

## Declaration

```objectivec
+ (NSTimer *) scheduledTimerWithTimeInterval:(NSTimeInterval) interval repeats:(BOOL) repeats block:(void (^)(NSTimer *timer)) block;
```

## Parameters

- `interval`: The number of seconds between firings of the timer. If `interval` is less than or equal to `0.0`, this method chooses the nonnegative value of `0.0001` seconds instead.
- `repeats`: If `true`, the timer will repeatedly reschedule itself until invalidated. If `false`, the timer will be invalidated after it fires.
- `block`: A block to be executed when the timer fires.

  The block takes a single `NSTimer` parameter and has no return value.

<a id="return-value"></a>

## Return Value

A new `NSTimer` object, configured according to the specified parameters.

<a id="Discussion"></a>

## Discussion

After `interval` seconds have elapsed, the timer fires, executing `block`.

## See Also

### Creating a Timer

- [scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:](scheduledtimer%28timeinterval_target_selector_userinfo_repeats_%29.md): Creates a timer and schedules it on the current run loop in the default mode.
- [scheduledTimerWithTimeInterval:invocation:repeats:](scheduledtimer%28timeinterval_invocation_repeats_%29.md): Creates a new timer and schedules it on the current run loop in the default mode.
- [timerWithTimeInterval:repeats:block:](init%28timeinterval_repeats_block_%29.md): Initializes a timer object with the specified time interval and block.
- [timerWithTimeInterval:target:selector:userInfo:repeats:](init%28timeinterval_target_selector_userinfo_repeats_%29.md): Initializes a timer object with the specified object and selector.
- [timerWithTimeInterval:invocation:repeats:](init%28timeinterval_invocation_repeats_%29.md): Initializes a timer object with the specified invocation object.
- [initWithFireDate:interval:repeats:block:](init%28fire_interval_repeats_block_%29.md): Initializes a timer for the specified date and time interval with the specified block.
- [initWithFireDate:interval:target:selector:userInfo:repeats:](init%28fireat_interval_target_selector_userinfo_repeats_%29.md): Initializes a timer using the specified object and selector.
