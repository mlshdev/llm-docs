> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/registerethernetinterface-948c9

# registerEthernetInterface

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

## Declaration

```objectivec
virtual IOReturn registerEthernetInterface(IOUserNetworkPacketQueue **queues, uint32_t numQueues, IOUserNetworkPacketBufferPool *txPool, IOUserNetworkPacketBufferPool *rxPool);
```
