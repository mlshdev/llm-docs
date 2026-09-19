> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vndetectanimalbodyposerequest/supportedjointsgroupnames

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Retrieves the joint group names the request supports.

## Declaration

```swift
@nonobjc var supportedJointsGroupNames: [VNAnimalBodyPoseObservation.JointsGroupName] { get throws }
```

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Retrieves the joint names the request supports.
