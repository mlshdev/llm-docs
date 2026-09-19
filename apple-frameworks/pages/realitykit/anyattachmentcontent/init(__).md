> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anyattachmentcontent/init(_:)

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates an instance that type-erases [AttachmentContent](../attachmentcontent.md).

## Declaration

```swift
@MainActor @preconcurrency init<Content>(_ content: Content) where Content : AttachmentContent
```
