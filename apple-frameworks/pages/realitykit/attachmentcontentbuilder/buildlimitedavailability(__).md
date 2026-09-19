> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder/buildlimitedavailability(_:)

# buildLimitedAvailability(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Provides support for “if” statements with `#available()` clauses in multi-statement closures, producing conditional content for the “then” branch, i.e. the conditionally-available branch.

## Declaration

```swift
static func buildLimitedAvailability(_ content: any AttachmentContent) -> some AttachmentContent

```
