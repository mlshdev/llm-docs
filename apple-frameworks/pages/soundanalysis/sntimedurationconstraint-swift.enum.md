> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstraint-swift.enum](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstraint-swift.enum)

# SNTimeDurationConstraint

**Framework:** Sound Analysis  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

## Declaration

```swift
enum SNTimeDurationConstraint
```

## Topics

### Inspecting a Constraint

- [SNTimeDurationConstraint.durationRange(\_:)](sntimedurationconstraint-swift.enum/durationrange%28__%29.md): A constraint that defines acceptable time window durations with a range.
- [SNTimeDurationConstraint.enumeratedDurations(\_:)](sntimedurationconstraint-swift.enum/enumerateddurations%28__%29.md): A constraint that defines acceptable time window durations in a discrete list.

## See Also

### Inspecting a Request

- [knownClassifications](snclassifysoundrequest/knownclassifications.md): A string array that contains every prediction label in the request’s underlying sound classifier model.
