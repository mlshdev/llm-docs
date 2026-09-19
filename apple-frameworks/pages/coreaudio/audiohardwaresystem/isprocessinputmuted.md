> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/isprocessinputmuted

# isProcessInputMuted

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that all data coming into the process for all devices will be silent. A value of false indicates that input data will be received normally.

## Declaration

```swift
var isProcessInputMuted: Bool { get throws }
```
