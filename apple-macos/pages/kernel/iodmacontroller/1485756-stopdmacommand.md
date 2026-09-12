> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacontroller/1485756-stopdmacommand](https://developer.apple.com/documentation/kernel/iodmacontroller/1485756-stopdmacommand)

# stopDMACommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn stopDMACommand(UInt32 dmaIndex, bool flush, uint64_t timeout);
```
