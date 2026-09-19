> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface400/3142846-writepipe

# WritePipe

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15+

## Declaration

```objectivec
IOReturn (*WritePipe)(void *self, UInt8 pipeRef, void *buf, UInt32 size);
```
