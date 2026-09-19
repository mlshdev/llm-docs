> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vndetecthumanbodyposerequest/supportedjointsgroupnames

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Retrieves the supported joint group names.

## Declaration

```swift
@nonobjc var supportedJointsGroupNames: [VNHumanBodyPoseObservation.JointsGroupName] { get throws }
```

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointNames(forRevision:)](supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNames(forRevision:)](supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
