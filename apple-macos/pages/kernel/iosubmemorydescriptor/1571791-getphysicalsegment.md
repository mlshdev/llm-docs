> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iosubmemorydescriptor/1571791-getphysicalsegment

# getPhysicalSegment

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual addr64_t getPhysicalSegment(IOByteCount offset, IOByteCount *length, IOOptionBits options);
```
