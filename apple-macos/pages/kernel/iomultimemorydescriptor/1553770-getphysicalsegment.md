> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomultimemorydescriptor/1553770-getphysicalsegment](https://developer.apple.com/documentation/kernel/iomultimemorydescriptor/1553770-getphysicalsegment)

# getPhysicalSegment

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual addr64_t getPhysicalSegment(IOByteCount offset, IOByteCount *length, IOOptionBits options);
```
