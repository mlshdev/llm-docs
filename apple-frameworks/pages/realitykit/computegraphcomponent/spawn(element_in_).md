> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/spawn(element:in:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/spawn(element:in:))

# spawn(element:in:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Spawns a new element in the particle simulation.

## Declaration

```swift
mutating func spawn(element: ElementSpawnParameters, in system: ComputeNodeGraph.NodeID? = nil)
```

## Parameters

- `element`: The spawn parameters defining the properties of the element to create
- `system`: The ID of the specific system to spawn the element in. When `nil`, all systems will be asked to spawn the same element.

<a id="discussion"></a>

## Discussion

This method queues an element to be spawned during the next simulation update. The spawning is deferred and batched for performance reasons.

> **Note**

> The actual spawning occurs during the simulation update cycle.
