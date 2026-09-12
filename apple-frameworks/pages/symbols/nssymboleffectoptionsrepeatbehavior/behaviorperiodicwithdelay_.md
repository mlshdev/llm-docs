> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboleffectoptionsrepeatbehavior/behaviorperiodicwithdelay:](https://developer.apple.com/documentation/symbols/nssymboleffectoptionsrepeatbehavior/behaviorperiodicwithdelay:)

# behaviorPeriodicWithDelay:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates and returns a repeat behavior with a preferred repeat delay using periodic animations. Periodic animations play the effect at regular intervals starting and stopping each time.

## Declaration

```objectivec
+ (instancetype) behaviorPeriodicWithDelay:(double) delay;
```

## Parameters

- `delay`: The preferred delay between repetitions, in seconds.

<a id="return-value"></a>

## Return Value

A new behavior that prefers to repeat indefinitely with a specified delay using periodic animations.
