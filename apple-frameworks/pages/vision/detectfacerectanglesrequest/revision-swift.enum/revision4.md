> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectfacerectanglesrequest/revision-swift.enum/revision4](https://developer.apple.com/documentation/vision/detectfacerectanglesrequest/revision-swift.enum/revision4)

# DetectFaceRectanglesRequest.Revision.revision4

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Compared to `.revision3`, this revision generally provides better precision and recall, and bounding boxes tend to be tighter. This is the default revision on platforms that support it. Specify `.revision3` at instantiation to preserve the previous behavior. Use [supportedRevisions](../supportedrevisions.md) to check if this revision is supported on the platform.

## Declaration

```swift
case revision4
```

## See Also

### Getting the revision

- [DetectFaceRectanglesRequest.Revision.revision3](revision3.md): An algorithm or implementation that represents the third revision.
