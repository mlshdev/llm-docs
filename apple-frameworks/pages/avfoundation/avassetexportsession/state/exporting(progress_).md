> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetexportsession/state/exporting(progress:)

# AVAssetExportSession.State.exporting(progress:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An export session is currently exporting media.

## Declaration

```swift
case exporting(progress: Progress)
```

## Parameters

- `progress`: A value that indicates the completion percentage of the export operation.

## See Also

### States

- [AVAssetExportSession.State.pending](pending.md): An export operation is currently pending.
- [AVAssetExportSession.State.waiting](waiting.md): An export session is currently waiting.
