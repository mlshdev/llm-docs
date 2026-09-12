> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1436326-deblockrequest](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436326-deblockrequest)

# deblockRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void deblockRequest(UInt64 byteStart, IOMemoryDescriptor *buffer, IOStorageAttributes *attributes, IOStorageCompletion *completion, Context *context);
```
