> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/1550712-setcommandbuffers

# SetCommandBuffers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn SetCommandBuffers(IOFireWireSBP2ORB *orb, SCSITaskIdentifier request);
```
