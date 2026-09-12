> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton/joint(_:)](https://developer.apple.com/documentation/arkit/handskeleton/joint(_:))

# joint(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Retrieves a hand joint based on the joint name you specify.

## Declaration

```swift
func joint(_ named: HandSkeleton.JointName) -> HandSkeleton.Joint
```

## Parameters

- `named`: The name of the hand joint to retrieve.

<a id="return-value"></a>

## Return Value

A hand joint referred to by the `named` parameter.

## See Also

### Retrieving specific hand joints

- [HandSkeleton.Joint](joint.md): The name and position of an individual hand joint.
- [HandSkeleton.JointName](jointname.md): The names of different hand joints.
