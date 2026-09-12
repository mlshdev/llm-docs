> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeletondefinition/jointnames](https://developer.apple.com/documentation/arkit/arskeletondefinition/jointnames)

# jointNames (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A collection of unique joint names.

## Declaration

```swift
var jointNames: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Refer to this array to convert a joint index to a joint identifier.

## See Also

### Getting Joint Information

- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [index(for:)](index%28for_%29.md): Returns the index for a given joint identifier.
- [parentIndices](parentindices-u2u9.md): The parent index for each joint.

# jointNames (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A collection of unique joint names.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * jointNames;
```

<a id="Discussion"></a>

## Discussion

Refer to this array to convert a joint index to a joint identifier.

## See Also

### Getting Joint Information

- [jointCount](jointcount.md): The skeleton’s total number of joints.
- [indexForJointName:](indexforjointname_.md): Returns the index for a given joint identifier.
- [parentIndices](parentindices-82iw2.md): The parent index for each joint.
