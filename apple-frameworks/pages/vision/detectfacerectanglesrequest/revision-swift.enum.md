> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectfacerectanglesrequest/revision-swift.enum](https://developer.apple.com/documentation/vision/detectfacerectanglesrequest/revision-swift.enum)

# DetectFaceRectanglesRequest.Revision

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type that describes the algorithm or implementation that the request performs.

## Declaration

```swift
enum Revision
```

## Topics

### Getting the revision

- [DetectFaceRectanglesRequest.Revision.revision3](revision-swift.enum/revision3.md): An algorithm or implementation that represents the third revision.
- [DetectFaceRectanglesRequest.Revision.revision4](revision-swift.enum/revision4.md): Compared to `.revision3`, this revision generally provides better precision and recall, and bounding boxes tend to be tighter. This is the default revision on platforms that support it. Specify `.revision3` at instantiation to preserve the previous behavior. Use [supportedRevisions](supportedrevisions.md) to check if this revision is supported on the platform.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the revision

- [revision](revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](supportedrevisions.md): The collection of revisions the request supports.
