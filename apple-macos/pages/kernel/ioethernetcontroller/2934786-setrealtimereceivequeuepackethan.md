> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller/2934786-setrealtimereceivequeuepackethan](https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934786-setrealtimereceivequeuepackethan)

# setRealtimeReceiveQueuePacketHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn setRealtimeReceiveQueuePacketHandler(uint32_t queueIndex, avb_packet_callback_t callback, void *context);
```
