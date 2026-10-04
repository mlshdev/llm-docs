> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setisprocessinputmuted(_:)

# setIsProcessInputMuted(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the isProcessInputMuted property.

## Declaration

```swift
func setIsProcessInputMuted(_ muted: Bool) throws
```

## Parameters

- `muted`: A Bool where true indicates that all data coming into the process for all devices will be silent.
