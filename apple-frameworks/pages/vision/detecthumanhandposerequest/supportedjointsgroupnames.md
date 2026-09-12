> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanhandposerequest/supportedjointsgroupnames](https://developer.apple.com/documentation/vision/detecthumanhandposerequest/supportedjointsgroupnames)

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The joint group names the request supports.

## Declaration

```swift
var supportedJointsGroupNames: [HumanHandPoseObservation.JointsGroupName] { get throws }
```

## See Also

### Configuring a request

- [maximumHandCount](maximumhandcount.md): The maximum number of hands to detect in an image.
- [supportedJointNames](supportedjointnames.md): The joint names the request supports.
