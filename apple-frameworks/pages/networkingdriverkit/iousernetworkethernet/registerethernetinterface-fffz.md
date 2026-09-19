> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/registerethernetinterface-fffz

# RegisterEthernetInterface

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
virtual kern_return_t RegisterEthernetInterface(ether_addr_t macAddress, IOUserNetworkPacketBufferPool *pool, IOUserNetworkPacketQueue **queues, uint32_t queueCount);
```
