> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder/buildif(_:)

# buildIf(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Provides support for “if” statements in multi-statement closures, producing an optional view that is visible only when the condition evaluates to `true`.

## Declaration

```swift
static func buildIf<Content>(_ content: Content?) -> Content? where Content : AttachmentContent
```
