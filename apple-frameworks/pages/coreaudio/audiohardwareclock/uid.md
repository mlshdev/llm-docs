> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareclock/uid

# uid

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A String that contains a persistent identifier for the clock device. A clock’s UID is persistent across boots. The content of the UID string is a black box and may contain information that is unique to a particular instance of an clock’s hardware or unique to the CPU. Therefore they are not suitable for passing between CPUs or for identifying similar models of hardware.

## Declaration

```swift
var uid: String { get throws }
```
