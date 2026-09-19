> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface500/1559293-lowlatencywriteisochpipeasync

# LowLatencyWriteIsochPipeAsync

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
IOReturn (*LowLatencyWriteIsochPipeAsync)(void *self, UInt8 pipeRef, void *buf, UInt64 frameStart, UInt32 numFrames, UInt32 updateFrequency, IOUSBLowLatencyIsocFrame *frameList, IOAsyncCallback1 callback, void *refcon);
```
