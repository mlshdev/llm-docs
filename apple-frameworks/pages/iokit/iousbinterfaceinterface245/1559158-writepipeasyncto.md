> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface245/1559158-writepipeasyncto

# WritePipeAsyncTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.4+

## Declaration

```objectivec
IOReturn (*WritePipeAsyncTO)(void *self, UInt8 pipeRef, void *buf, UInt32 size, UInt32 noDataTimeout, UInt32 completionTimeout, IOAsyncCallback1 callback, void *refcon);
```
