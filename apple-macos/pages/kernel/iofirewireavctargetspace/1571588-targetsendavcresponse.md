> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571588-targetsendavcresponse

# targetSendAVCResponse

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn targetSendAVCResponse(UInt32 generation, UInt16 nodeID, IOBufferMemoryDescriptor *pBufMemDesc, UInt32 size);
```
