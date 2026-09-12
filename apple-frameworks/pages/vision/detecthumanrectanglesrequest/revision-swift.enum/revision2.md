> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanrectanglesrequest/revision-swift.enum/revision2](https://developer.apple.com/documentation/vision/detecthumanrectanglesrequest/revision-swift.enum/revision2)

# DetectHumanRectanglesRequest.Revision.revision2

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An algorithm or implementation that represents the second revision.

## Declaration

```swift
case revision2
```

## See Also

### Getting the revision

- [DetectHumanRectanglesRequest.Revision.revision3](revision3.md): Compared to `.revision2`, this revision generally provides better precision and recall. This is the default revision on platforms that support it. Specify `.revision2` at instantiation to preserve the previous behavior. Use [supportedRevisions](../supportedrevisions.md) to check if this revision is supported on the platform.
