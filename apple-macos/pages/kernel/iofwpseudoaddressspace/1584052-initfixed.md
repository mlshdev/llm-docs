> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspace/1584052-initfixed](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584052-initfixed)

# initFixed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initFixed(IOFireWireBus *bus, FWAddress addr, UInt32 len, FWReadCallback reader, FWWriteCallback writer, void *refcon);
```
