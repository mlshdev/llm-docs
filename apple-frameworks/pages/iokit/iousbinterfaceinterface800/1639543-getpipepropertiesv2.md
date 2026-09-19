> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface800/1639543-getpipepropertiesv2

# GetPipePropertiesV2

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.12+

## Declaration

```objectivec
IOReturn (*GetPipePropertiesV2)(void *self, UInt8 pipeRef, UInt8 *direction, UInt8 *number, UInt8 *transferType, UInt16 *maxPacketSize, UInt8 *interval, UInt8 *maxBurst, UInt8 *mult, UInt16 *bytesPerInterval);
```
