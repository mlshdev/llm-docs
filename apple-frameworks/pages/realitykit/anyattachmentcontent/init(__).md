> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anyattachmentcontent/init(_:)](https://developer.apple.com/documentation/realitykit/anyattachmentcontent/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates an instance that type-erases [AttachmentContent](../attachmentcontent.md).

## Declaration

```swift
@MainActor @preconcurrency init<Content>(_ content: Content) where Content : AttachmentContent
```
