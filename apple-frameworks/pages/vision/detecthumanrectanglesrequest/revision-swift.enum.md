> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanrectanglesrequest/revision-swift.enum](https://developer.apple.com/documentation/vision/detecthumanrectanglesrequest/revision-swift.enum)

# DetectHumanRectanglesRequest.Revision

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

- [DetectHumanRectanglesRequest.Revision.revision2](revision-swift.enum/revision2.md): An algorithm or implementation that represents the second revision.
- [DetectHumanRectanglesRequest.Revision.revision3](revision-swift.enum/revision3.md): Compared to `.revision2`, this revision generally provides better precision and recall. This is the default revision on platforms that support it. Specify `.revision2` at instantiation to preserve the previous behavior. Use [supportedRevisions](supportedrevisions.md) to check if this revision is supported on the platform.

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
