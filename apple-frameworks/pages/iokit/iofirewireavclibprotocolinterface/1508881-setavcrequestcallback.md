> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508881-setavcrequestcallback

# setAVCRequestCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

This function has been deprecated. Use installAVCCommandHandler instead.

## Declaration

```objectivec
IOReturn (*setAVCRequestCallback)(void *self, UInt32 subUnitType, UInt32 subUnitID, void *refCon, IOFWAVCRequestCallback callback);
```
