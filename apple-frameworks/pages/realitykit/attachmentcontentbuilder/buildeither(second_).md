> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder/buildeither(second:)

# buildEither(second:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “else” branch.

## Declaration

```swift
static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> ConditionalAttachmentContent<TrueContent, FalseContent> where TrueContent : AttachmentContent, FalseContent : AttachmentContent
```
