> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelsortgroupcomponent/group](https://developer.apple.com/documentation/realitykit/modelsortgroupcomponent/group)

# group

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The group that the component’s entity belongs to.

## Declaration

```swift
var group: ModelSortGroup { get set }
```

<a id="discussion"></a>

## Discussion

The renderer only draws entities with the same [ModelSortGroup](../modelsortgroup.md) relative to each other.

> **Note**

> Membership only applies to the entity that directly owns this component, but not to its descendants.
