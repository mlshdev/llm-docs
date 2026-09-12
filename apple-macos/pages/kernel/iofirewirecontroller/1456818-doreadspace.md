> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1456818-doreadspace](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456818-doreadspace)

# doReadSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 doReadSpace(UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, IOMemoryDescriptor **buf, IOByteCount *offset, IODMACommand **dma_command, IOFWRequestRefCon refcon);
```
