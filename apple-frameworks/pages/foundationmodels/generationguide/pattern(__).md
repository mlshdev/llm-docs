> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationguide/pattern(_:)

# pattern(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces that the string follows the pattern.

## Declaration

```swift
static func pattern<Output>(_ regex: Regex<Output>) -> GenerationGuide<String>
```
