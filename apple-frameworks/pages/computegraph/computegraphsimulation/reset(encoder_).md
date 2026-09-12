> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/reset(encoder:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/reset(encoder:))

# reset(encoder:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Resets the simulation to its initial state, clearing all live elements and accumulated time.

## Declaration

```swift
final func reset(encoder: any MTLComputeCommandEncoder)
```

## Parameters

- `encoder`: The compute command encoder to encode the reset operation with.

<a id="discussion"></a>

## Discussion

The reset is encoded as a compute dispatch into `encoder`. You must commit the enclosing command buffer for the reset to take effect on the GPU.
