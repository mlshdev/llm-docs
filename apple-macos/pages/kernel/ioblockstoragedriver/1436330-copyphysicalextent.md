> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1436330-copyphysicalextent](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436330-copyphysicalextent)

# copyPhysicalExtent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOStorage * copyPhysicalExtent(IOService *client, UInt64 *byteStart, UInt64 *byteCount);
```
