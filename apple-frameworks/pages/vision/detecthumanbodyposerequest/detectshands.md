> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanbodyposerequest/detectshands](https://developer.apple.com/documentation/vision/detecthumanbodyposerequest/detectshands)

# detectsHands

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that detects hands of the body in the results, if they’re visible.

## Declaration

```swift
var detectsHands: Bool
```

<a id="Discussion"></a>

## Discussion

The default value is `true,` and requires [DetectHumanBodyPoseRequest.Revision.revision2](revision-swift.enum/revision2.md).

## See Also

### Configuring a request

- [supportedJointNames](supportedjointnames.md): The joint names the request supports.
- [supportedJointsGroupNames](supportedjointsgroupnames.md): The joint group names the request supports.
