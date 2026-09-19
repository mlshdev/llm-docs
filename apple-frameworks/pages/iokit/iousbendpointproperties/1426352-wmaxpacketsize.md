> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbendpointproperties/1426352-wmaxpacketsize

# wMaxPacketSize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

The meaning of this value depends on whether this is called with GetPipePropertiesV3 or GetEndpointPropertiesV3. See the documentation of those calls for more info.

## Declaration

```objectivec
UInt16 wMaxPacketSize;
```
