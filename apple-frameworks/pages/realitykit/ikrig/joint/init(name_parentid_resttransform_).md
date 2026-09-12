> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/joint/init(name:parentid:resttransform:)](https://developer.apple.com/documentation/realitykit/ikrig/joint/init(name:parentid:resttransform:))

# init(name:parentID:restTransform:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a joint with the provided base elements.

## Declaration

```swift
init(name: String, parentID: IKRig.Joint.ID? = nil, restTransform: Transform = .identity)
```

## Parameters

- `name`: The name of the new joint.
- `parentID`: The name of the parent joint if there is one.
- `restTransform`: The offset of this joint from its parent (local space).
