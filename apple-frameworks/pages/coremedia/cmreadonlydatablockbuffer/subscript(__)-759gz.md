> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/subscript(_:)-759gz

# subscript(\_:)

**Framework:** Core Media  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new block buffer that references a subrange of this block buffer.

## Declaration

```swift
subscript(range: Range<CMReadOnlyDataBlockBuffer.Index>) -> CMReadOnlyDataBlockBuffer { get }
```
