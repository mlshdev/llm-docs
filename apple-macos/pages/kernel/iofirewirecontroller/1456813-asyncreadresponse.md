> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456813-asyncreadresponse

# asyncReadResponse

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn asyncReadResponse(UInt32 generation, UInt16 nodeID, int speed, IOMemoryDescriptor *buf, IOByteCount offset, int len, IOFWRequestRefCon refcon);
```
