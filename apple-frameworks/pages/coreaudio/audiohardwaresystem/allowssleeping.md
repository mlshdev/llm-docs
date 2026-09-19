> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/allowssleeping

# allowsSleeping

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that the process will allow the CPU to idle sleep even if there is audio IO in progress. Fasle indicates that the CPU will not be allowed to idle sleep.

## Declaration

```swift
var allowsSleeping: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

Note that this property won’t affect when the CPU is forced to sleep.
