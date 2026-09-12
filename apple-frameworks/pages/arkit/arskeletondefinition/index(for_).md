> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeletondefinition/index(for:)](https://developer.apple.com/documentation/arkit/arskeletondefinition/index(for:))

# index(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the index for a given joint identifier.

## Declaration

```swift
@nonobjc func index(for jointName: ARSkeleton.JointName) -> Int
```

<a id="Discussion"></a>

## Discussion

This function returns `NSNotFound` if an invalid joint name is passed in.

## See Also

### Getting Joint Information

- [jointNames](jointnames.md): A collection of unique joint names.
- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [parentIndices](parentindices-u2u9.md): The parent index for each joint.
