> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodypose3drequest/supportedjointsgroupnames](https://developer.apple.com/documentation/vision/vndetecthumanbodypose3drequest/supportedjointsgroupnames)

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the joint names the request supports.

## Declaration

```swift
@nonobjc var supportedJointsGroupNames: [VNHumanBodyPose3DObservation.JointsGroupName] { get throws }
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Returns the joint group names the request supports.
