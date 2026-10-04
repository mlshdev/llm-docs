> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/registerethernetinterface-8pzu9

# registerEthernetInterface

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
virtual IOReturn registerEthernetInterface(ether_addr_t macAddress, IOUserNetworkPacketQueue **queues, uint32_t numQueues, IOUserNetworkPacketBufferPool *txPool, IOUserNetworkPacketBufferPool *rxPool);
```
