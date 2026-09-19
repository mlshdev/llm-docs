> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/billboardaction/transition

# BillboardAction.Transition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The duration and timing of how an action event transitions from one state to another.

## Declaration

```swift
struct Transition
```

## Topics

### Initializers

- [init(duration:timingFunction:)](transition/init%28duration_timingfunction_%29.md): Creates a transition with a duration and timing function.

### Instance Properties

- [duration](transition/duration.md): The amount of time the transition takes to go from one state to another.
- [timingFunction](transition/timingfunction.md): The rate of change at the beginning and end of the transition.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
