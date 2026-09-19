> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbendpointproperties/1426234-wbytesperinterval

# wBytesPerInterval

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

For SuperSpeed interrupt and isoc endpoints, this is the wBytesPerInterval from the SuperSpeed Endpoint Companion Descriptor. For High Speed High Bandwidth isoc endpoints, this will be equal to wMaxPacketSize \* (bMult+1).

## Declaration

```objectivec
UInt16 wBytesPerInterval;
```
