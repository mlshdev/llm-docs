> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectfacelandmarksrequest/revision-swift.enum/revision3](https://developer.apple.com/documentation/vision/detectfacelandmarksrequest/revision-swift.enum/revision3)

# DetectFaceLandmarksRequest.Revision.revision3

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An algorithm or implementation that represents the third revision.

## Declaration

```swift
case revision3
```

## See Also

### Getting the revision

- [DetectFaceLandmarksRequest.Revision.revision4](revision4.md): This revision uses [DetectFaceRectanglesRequest.Revision.revision4](../../detectfacerectanglesrequest/revision-swift.enum/revision4.md) for detecting faces and then detects 98 face landmark points, providing more detailed results than the previous revision. This is the default revision on platforms that support it. Specify `.revision3` at instantiation to preserve the previous behavior. Use [supportedRevisions](../supportedrevisions.md) to check if this revision is supported on the platform.
