> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodypose3drequest/supportedjointnames](https://developer.apple.com/documentation/vision/vndetecthumanbodypose3drequest/supportedjointnames)

# supportedJointNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the joint group names the request supports.

## Declaration

```swift
@nonobjc var supportedJointNames: [VNHumanBodyPose3DObservation.JointName] { get throws }
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

## See Also

### Determining Supported Joints

- [supportedJointsGroupNames](supportedjointsgroupnames.md): Returns the joint names the request supports.
