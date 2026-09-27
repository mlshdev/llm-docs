> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456818-doreadspace

# doReadSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 doReadSpace(UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, IOMemoryDescriptor **buf, IOByteCount *offset, IODMACommand **dma_command, IOFWRequestRefCon refcon);
```
