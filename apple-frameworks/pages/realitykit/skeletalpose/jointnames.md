> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletalpose/jointnames

# jointNames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The names of the joints in the pose in specific order.

## Declaration

```swift
var jointNames: [String] { get set }
```

<a id="discussion"></a>

## Discussion

Each joint name has a corresponding transformation value in [jointTransforms](jointtransforms.md) at the same index.

Updates of the value results in resizing or reordering of the pose’s [jointTransforms](jointtransforms.md) to match. New joint names add identity transformations at the matching indices.
