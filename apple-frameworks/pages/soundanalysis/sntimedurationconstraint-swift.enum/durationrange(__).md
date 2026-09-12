> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/sntimedurationconstraint-swift.enum/durationrange(_:)](https://developer.apple.com/documentation/soundanalysis/sntimedurationconstraint-swift.enum/durationrange(_:))

# SNTimeDurationConstraint.durationRange(\_:)

**Framework:** Sound Analysis  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constraint that defines acceptable time window durations with a range.

## Declaration

```swift
case durationRange(CMTimeRange)
```

## Parameters

- `durationRange`: A time duration range the request’s underlying sound classifier accepts.

## See Also

### Inspecting a Constraint

- [SNTimeDurationConstraint.enumeratedDurations(\_:)](enumerateddurations%28__%29.md): A constraint that defines acceptable time window durations in a discrete list.
