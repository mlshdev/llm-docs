> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanbodyposerequest/supportedjointsgroupnames](https://developer.apple.com/documentation/vision/detecthumanbodyposerequest/supportedjointsgroupnames)

# supportedJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The joint group names the request supports.

## Declaration

```swift
var supportedJointsGroupNames: [HumanBodyPoseObservation.JointsGroupName] { get }
```

## See Also

### Configuring a request

- [detectsHands](detectshands.md): A Boolean value that detects hands of the body in the results, if they’re visible.
- [supportedJointNames](supportedjointnames.md): The joint names the request supports.
