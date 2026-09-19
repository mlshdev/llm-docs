> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iovideodeviceinterface_v1_t/1385554-setcontrolvalue

# SetControlValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
IOReturn (*SetControlValue)(IOVideoDeviceRef device, UInt32 controlID, UInt32 value, UInt32 *newValue);
```
