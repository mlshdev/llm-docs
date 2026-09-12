> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/allowssleeping](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/allowssleeping)

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
