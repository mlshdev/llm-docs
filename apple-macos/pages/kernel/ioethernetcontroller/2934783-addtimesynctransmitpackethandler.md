> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller/2934783-addtimesynctransmitpackethandler](https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934783-addtimesynctransmitpackethandler)

# addTimeSyncTransmitPacketHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
IOReturn addTimeSyncTransmitPacketHandler(avb_packet_callback_t callback, void *context, uint32_t *callbackRef);
```
