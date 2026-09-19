> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/chart3dcontentbuilder/buildeither(second:)

# buildEither(second:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static func buildEither<C1, C2>(second component: C2) -> BuilderConditional<C1, C2> where C1 : Chart3DContent, C2 : Chart3DContent
```
