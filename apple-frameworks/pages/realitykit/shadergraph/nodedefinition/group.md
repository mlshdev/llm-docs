> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition/group](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition/group)

# group

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The category this definition belongs to, or `nil` if uncategorized.

## Declaration

```swift
var group: String? { get }
```

<a id="discussion"></a>

## Discussion

Group names are coarse categories such as `"math"`, `"texture"`, or `"geometric"`. For example, `ND_atan2_float` belongs to `"math"`.

Use this property to organize definitions into sections in a node picker or library browser UI.
