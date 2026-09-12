> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/spawn(elements:in:using:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/spawn(elements:in:using:))

# spawn(elements:in:using:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Spawns new elements into the simulation with the given initial parameters.

## Declaration

```swift
final func spawn(elements: borrowing [ElementSpawnParameters], in systemID: Int?, using encoder: any MTLComputeCommandEncoder)
```

## Parameters

- `elements`: The initial state for each element to spawn.
- `systemID`: The index of the particle simulation stage to spawn into, or `nil` to spawn into all simulations.
- `encoder`: The compute command encoder to encode the spawn operation with.

<a id="discussion"></a>

## Discussion

Each entry in `elements` produces one new element. The initialization stage of the simulation graph runs on the newly spawned elements before they participate in subsequent simulation steps, and may read or overwrite the values supplied here.
