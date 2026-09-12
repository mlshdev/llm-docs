> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanhandposerequest/supportedjointsgroupnames](https://developer.apple.com/documentation/vision/vndetecthumanhandposerequest/supportedjointsgroupnames)

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Retrieves the supported joint group names.

## Declaration

```swift
@nonobjc var supportedJointsGroupNames: [VNHumanHandPoseObservation.JointsGroupName] { get throws }
```

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointNames(forRevision:)](supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNames(forRevision:)](supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
