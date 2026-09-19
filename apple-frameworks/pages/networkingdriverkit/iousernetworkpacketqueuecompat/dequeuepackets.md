> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueuecompat/dequeuepackets

# DequeuePackets

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual uint32_t DequeuePackets(IOUserNetworkPacket **packets, uint32_t maxDequeueCount);
```
