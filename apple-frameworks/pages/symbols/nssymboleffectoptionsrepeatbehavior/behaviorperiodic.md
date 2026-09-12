> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboleffectoptionsrepeatbehavior/behaviorperiodic](https://developer.apple.com/documentation/symbols/nssymboleffectoptionsrepeatbehavior/behaviorperiodic)

# behaviorPeriodic

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates and returns a repeat behavior that prefers to repeat indefinitely using periodic animations. Periodic animations play the effect at regular intervals starting and stopping each time.

## Declaration

```objectivec
+ (instancetype) behaviorPeriodic;
```

<a id="return-value"></a>

## Return Value

A new behavior that prefers to repeat indefinitely using periodic animations.
