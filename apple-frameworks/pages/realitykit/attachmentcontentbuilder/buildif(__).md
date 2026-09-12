> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachmentcontentbuilder/buildif(_:)](https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Provides support for “if” statements in multi-statement closures, producing an optional view that is visible only when the condition evaluates to `true`.

## Declaration

```swift
static func buildIf<Content>(_ content: Content?) -> Content? where Content : AttachmentContent
```
