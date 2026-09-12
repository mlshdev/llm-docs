> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/withcontinuousobservation(options:apply:)](https://developer.apple.com/documentation/observation/withcontinuousobservation(options:apply:))

# withContinuousObservation(options:apply:)

**Framework:** Observation  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func withContinuousObservation(options: ObservationTracking.Options, apply: @escaping @isolated(any) @Sendable (borrowing ObservationTracking.Event) -> Void) -> ObservationTracking.Token
```
