> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshinstancescomponent/part/bounds](https://developer.apple.com/documentation/realitykit/meshinstancescomponent/part/bounds)

# bounds

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The bounding box to encompass all of the instances this group part draws.

## Declaration

```swift
var bounds: BoundingBox?
```

<a id="discussion"></a>

## Discussion

If bounds is `nil`, RealityKit calculates a bounding box for you each time you update your instances within [LowLevelInstanceData](../../lowlevelinstancedata.md).

Automatic bounds calculation is not supported when [LowLevelInstanceData](../../lowlevelinstancedata.md) is updated via [replace(using:)](../../lowlevelinstancedata/replace%28using_%29.md). Provide a non-nil bounds value when updating instances with Metal.
