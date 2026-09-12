> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/resource](https://developer.apple.com/documentation/realitykit/computegraphcomponent/resource)

# resource

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The compute graph resource that defines the simulation.

## Declaration

```swift
var resource: ComputeGraphResource? { get set }
```

<a id="discussion"></a>

## Discussion

Assigning a new resource replaces the current graph and resets the simulation. Set to `nil` to detach the resource without destroying the entity.
