> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1436337-executerequest](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436337-executerequest)

# executeRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void executeRequest(UInt64 byteStart, IOMemoryDescriptor *buffer, IOStorageAttributes *attributes, IOStorageCompletion *completion, Context *context);
```
