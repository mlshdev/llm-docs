> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/skeleton/joint/parentindex](https://developer.apple.com/documentation/realitykit/meshresource/skeleton/joint/parentindex)

# parentIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The index of this joint’s parent, or nil if this joint has no parent.

## Declaration

```swift
var parentIndex: Int?
```

<a id="discussion"></a>

## Discussion

If the joint has a parent, the index of the parent needs to be lower than that of the child.
