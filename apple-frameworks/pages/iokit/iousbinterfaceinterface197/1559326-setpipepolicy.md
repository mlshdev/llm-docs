> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface197/1559326-setpipepolicy

# SetPipePolicy

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

## Declaration

```objectivec
IOReturn (*SetPipePolicy)(void *self, UInt8 pipeRef, UInt16 maxPacketSize, UInt8 maxInterval);
```
