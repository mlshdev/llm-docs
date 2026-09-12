> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/advanceparams/init(deltatime:commandbuffer:computeencoder:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/init(deltatime:commandbuffer:computeencoder:))

# init(deltaTime:commandBuffer:computeEncoder:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Creates advance parameters with the required Metal objects.

## Declaration

```swift
init(deltaTime: Float, commandBuffer: any MTLCommandBuffer, computeEncoder: any MTLComputeCommandEncoder)
```

## Parameters

- `deltaTime`: The time interval, in seconds, to advance the simulation.
- `commandBuffer`: The command buffer to encode simulation commands into.
- `computeEncoder`: The compute command encoder to use.
