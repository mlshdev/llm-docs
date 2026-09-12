> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.struct/fixed(steps:)](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.struct/fixed(steps:))

# fixed(steps:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A fixed maximum number of steps per update is manually configured.

## Declaration

```swift
static func fixed(steps: Int) -> ClothSimulationComponent.MaximumStepsPerUpdate
```

## Parameters

- `steps`: The maximum number of time steps to process per update. Clamped to a minimum of 1.

<a id="return-value"></a>

## Return Value

A fixed maximum-steps-per-update configuration.
