> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/tolerance](https://developer.apple.com/documentation/foundation/timer/tolerance)

# tolerance (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of time after the scheduled fire date that the timer may fire.

## Declaration

```swift
var tolerance: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is zero, which means no additional tolerance is applied.

Setting a tolerance for a timer allows it to fire later than the scheduled fire date. Allowing the system flexibility in when a timer fires increases the ability of the system to optimize for increased power savings and responsiveness.

The timer may fire at any time between its scheduled fire date and the scheduled fire date plus the tolerance. The timer will not fire before the scheduled fire date. For repeating timers, the next fire date is calculated from the original fire date regardless of tolerance applied at individual fire times, to avoid drift. The system reserves the right to apply a small amount of tolerance to certain timers regardless of the value of this property.

# tolerance (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of time after the scheduled fire date that the timer may fire.

## Declaration

```objectivec
@property NSTimeInterval tolerance;
```

<a id="Discussion"></a>

## Discussion

The default value is zero, which means no additional tolerance is applied.

Setting a tolerance for a timer allows it to fire later than the scheduled fire date. Allowing the system flexibility in when a timer fires increases the ability of the system to optimize for increased power savings and responsiveness.

The timer may fire at any time between its scheduled fire date and the scheduled fire date plus the tolerance. The timer will not fire before the scheduled fire date. For repeating timers, the next fire date is calculated from the original fire date regardless of tolerance applied at individual fire times, to avoid drift. The system reserves the right to apply a small amount of tolerance to certain timers regardless of the value of this property.
