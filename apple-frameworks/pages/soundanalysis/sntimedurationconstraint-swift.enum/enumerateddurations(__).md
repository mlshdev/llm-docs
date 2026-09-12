> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstraint-swift.enum/enumerateddurations(_:)](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstraint-swift.enum/enumerateddurations(_:))

# SNTimeDurationConstraint.enumeratedDurations(\_:)

**Framework:** Sound Analysis  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constraint that defines acceptable time window durations in a discrete list.

## Declaration

```swift
case enumeratedDurations([CMTime])
```

## Parameters

- `timeDurations`: An array of time durations the request’s underlying sound classifier accepts.

## See Also

### Inspecting a Constraint

- [SNTimeDurationConstraint.durationRange(\_:)](durationrange%28__%29.md): A constraint that defines acceptable time window durations with a range.
