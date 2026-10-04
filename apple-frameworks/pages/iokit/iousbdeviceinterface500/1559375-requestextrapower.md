> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface500/1559375-requestextrapower

# RequestExtraPower

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
IOReturn (*RequestExtraPower)(void *self, UInt32 type, UInt32 requestedPower, UInt32 *powerAvailable);
```
