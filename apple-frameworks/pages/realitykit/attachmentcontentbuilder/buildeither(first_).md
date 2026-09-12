> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachmentcontentbuilder/buildeither(first:)](https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Provides support for “if” statements in multi-statement closures, producing conditional content for the “then” branch.

## Declaration

```swift
static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> ConditionalAttachmentContent<TrueContent, FalseContent> where TrueContent : AttachmentContent, FalseContent : AttachmentContent
```
