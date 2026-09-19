> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457320-processwriterequest

# processWriteRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void processWriteRequest(UInt16 sourceID, UInt32 tlabel, UInt32 *hdr, void *buf, int len, IOFWSpeed speed);
```
