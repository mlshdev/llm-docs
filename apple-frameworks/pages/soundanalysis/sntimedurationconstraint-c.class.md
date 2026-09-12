> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstraint-c.class](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstraint-c.class)

# SNTimeDurationConstraint

**Interface language:** Objective-C

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

## Declaration

```objectivec
@interface SNTimeDurationConstraint : NSObject
```

<a id="overview"></a>

## Overview

Inspect the constraint’s [type](sntimedurationconstraint-c.class/type.md) property first to determine whether to check [durationRange](sntimedurationconstraint-c.class/durationrange.md) or [enumeratedDurations](sntimedurationconstraint-c.class/enumerateddurations.md) next.

## Topics

### Inspecting a Constraint

- [type](sntimedurationconstraint-c.class/type.md): An enumeration that tells you which constraint property to inspect.
- [SNTimeDurationConstraintType](sntimedurationconstrainttype.md): Defines the types a time duration constraint uses.
- [durationRange](sntimedurationconstraint-c.class/durationrange.md): A time duration range the request’s underlying sound classifier accepts.
- [enumeratedDurations](sntimedurationconstraint-c.class/enumerateddurations.md): An array of time durations the request’s underlying sound classifier accepts.

### Creating a Time Duration Constraint

- [initWithDurationRange:](sntimedurationconstraint-c.class/initwithdurationrange_.md): Creates a constraint with a time duration range.
- [initWithEnumeratedDurations:](sntimedurationconstraint-c.class/initwithenumerateddurations_.md): Creates a constraint with discrete time durations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting a Request

- [knownClassifications](snclassifysoundrequest/knownclassifications.md): A string array that contains every prediction label in the request’s underlying sound classifier model.
