> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeletondefinition/parentindices-u2u9](https://developer.apple.com/documentation/arkit/arskeletondefinition/parentindices-u2u9)

# parentIndices

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The parent index for each joint.

## Declaration

```swift
@nonobjc var parentIndices: [Int] { get }
```

<a id="Discussion"></a>

## Discussion

This property may be used to identify the hierarchical dependency between joints. If a line is drawn for every joint and its parent joint, the result is a visualization of the underlying skeleton. The joint with no parent is denoted as the root joint. The root joint’s parent index is -1.

## See Also

### Getting Joint Information

- [jointNames](jointnames.md): A collection of unique joint names.
- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [index(for:)](index%28for_%29.md): Returns the index for a given joint identifier.
