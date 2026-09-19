> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechmodels/endretention()

# endRetention()

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Releases all models held by cached recognizer instances. The method does not return until all models are released.

## Declaration

```swift
static func endRetention() async
```
