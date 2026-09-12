> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/geometry/init(bounds:transform:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/geometry/init(bounds:transform:))

# init(bounds:transform:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates an instance with an optional bounding box and transform.

## Declaration

```swift
init(bounds: BoundingBox = BoundingBox.empty, transform: Transform = Transform.identity)
```

## Parameters

- `bounds`: An optional bounding box to specify the size of the generated 3D model. If you don’t pass a value, the initializer sets the bounding box to .empty, which tells RealityKit to calculate the object’s size.
- `transform`: An optional [Transform](../../../transform.md) that RealityKit applies to the object after it’s created. Use this to scale, rotate, or move the object before the session publishes the [PhotogrammetrySession.Output.requestComplete(\_:\_:)](../../output/requestcomplete%28____%29.md)
