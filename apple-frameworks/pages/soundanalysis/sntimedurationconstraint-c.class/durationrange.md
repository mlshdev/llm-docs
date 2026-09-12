> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstraint-c.class/durationrange](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstraint-c.class/durationrange)

# durationRange

**Interface language:** Objective-C

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time duration range the request’s underlying sound classifier accepts.

## Declaration

```objectivec
@property (assign, readonly) CMTimeRange durationRange;
```

## See Also

### Inspecting a Constraint

- [type](type.md): An enumeration that tells you which constraint property to inspect.
- [SNTimeDurationConstraintType](../sntimedurationconstrainttype.md): Defines the types a time duration constraint uses.
- [enumeratedDurations](enumerateddurations.md): An array of time durations the request’s underlying sound classifier accepts.
