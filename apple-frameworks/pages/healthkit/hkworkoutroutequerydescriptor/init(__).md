> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutroutequerydescriptor/init(_:)

# init(\_:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a query descriptor that reads locations from the provided workout route sample.

## Declaration

```swift
init(_ workoutRoute: HKWorkoutRoute)
```

## Parameters

- `workoutRoute`: A workout route sample that contains locations.
