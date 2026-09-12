> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstrainttype](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstrainttype)

# SNTimeDurationConstraintType

**Interface language:** Objective-C

**Framework:** Sound Analysis  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Defines the types a time duration constraint uses.

## Declaration

```objectivec
enum SNTimeDurationConstraintType : NSInteger;
```

## Topics

### Constraint Types

- [SNTimeDurationConstraintTypeEnumerated](sntimedurationconstrainttype/sntimedurationconstrainttypeenumerated.md): A constraint type that uses an array of time durations to define what a request’s underlying sound classifier accepts.
- [SNTimeDurationConstraintTypeRange](sntimedurationconstrainttype/sntimedurationconstrainttyperange.md): A constraint type that uses a time duration range to define what a request’s underlying sound classifier accepts.

## See Also

### Inspecting a Constraint

- [type](sntimedurationconstraint-c.class/type.md): An enumeration that tells you which constraint property to inspect.
- [durationRange](sntimedurationconstraint-c.class/durationrange.md): A time duration range the request’s underlying sound classifier accepts.
- [enumeratedDurations](sntimedurationconstraint-c.class/enumerateddurations.md): An array of time durations the request’s underlying sound classifier accepts.
