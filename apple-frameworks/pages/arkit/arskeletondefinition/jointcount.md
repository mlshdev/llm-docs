> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeletondefinition/jointcount](https://developer.apple.com/documentation/arkit/arskeletondefinition/jointcount)

# jointCount (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The skeleton’s total number of joints.

## Declaration

```swift
var jointCount: Int { get }
```

## See Also

### Getting Joint Information

- [jointNames](jointnames.md): A collection of unique joint names.
- [index(for:)](index%28for_%29.md): Returns the index for a given joint identifier.
- [parentIndices](parentindices-u2u9.md): The parent index for each joint.

# jointCount (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The skeleton’s total number of joints.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger jointCount;
```

## See Also

### Getting Joint Information

- [jointNames](jointnames.md): A collection of unique joint names.
- [indexForJointName:](indexforjointname_.md): Returns the index for a given joint identifier.
- [parentIndices](parentindices-82iw2.md): The parent index for each joint.
