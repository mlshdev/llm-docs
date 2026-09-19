> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/+(_:_:)-92jke

# +(\_:\_:)

**Framework:** Core Media  
**Kind:** Operator  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new block buffer by concatenating two block buffers.

## Declaration

```swift
static func + (a: CMReadOnlyDataBlockBuffer, b: consuming CMMutableDataBlockBuffer) -> CMReadOnlyDataBlockBuffer
```
