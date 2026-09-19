> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934806-addtimesyncreceivepackethandler

# addTimeSyncReceivePacketHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
IOReturn addTimeSyncReceivePacketHandler(avb_packet_callback_t callback, void *context);
```
