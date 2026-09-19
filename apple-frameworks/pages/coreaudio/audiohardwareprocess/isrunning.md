> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareprocess/isrunning

# isRunning

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where a value of true indicates that there is audio IO in progress in the process.

## Declaration

```swift
var isRunning: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

Note that audio IO may be in progress even if no input or output streams are active.
