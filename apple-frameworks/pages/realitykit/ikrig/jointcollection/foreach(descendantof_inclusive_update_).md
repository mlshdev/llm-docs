> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikrig/jointcollection/foreach(descendantof:inclusive:update:)

# forEach(descendantOf:inclusive:update:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Calls the provided closure on each element in the hierarchy rooted at the named joint.

## Declaration

```swift
mutating func forEach(descendantOf rootJointName: String, inclusive: Bool = false, update: (inout IKRig.JointCollection.Element) -> Void)
```

## Parameters

- `rootJointName`: The name of the root of the hierarchy.
- `inclusive`: Flag to include the root joint in the update list.
- `update`: Closure to update the joints in-place.

<a id="discussion"></a>

## Discussion

> **Note**

> If the root joint is not found, the closure is not executed.
