> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/3516771-issuewrite

# IssueWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn IssueWrite(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount, void *clientData);
```
