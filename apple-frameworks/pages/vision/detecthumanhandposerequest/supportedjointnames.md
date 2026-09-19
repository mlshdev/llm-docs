> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/detecthumanhandposerequest/supportedjointnames

# supportedJointNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The joint names the request supports.

## Declaration

```swift
var supportedJointNames: [HumanHandPoseObservation.JointName] { get }
```

## See Also

### Configuring a request

- [maximumHandCount](maximumhandcount.md): The maximum number of hands to detect in an image.
- [supportedJointsGroupNames](supportedjointsgroupnames.md): The joint group names the request supports.
