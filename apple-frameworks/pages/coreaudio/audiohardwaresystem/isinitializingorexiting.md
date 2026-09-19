> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/isinitializingorexiting

# isInitializingOrExiting

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates the HAL is either in the midst of initializing or in the midst of exiting the process.

## Declaration

```swift
var isInitializingOrExiting: Bool { get throws }
```
