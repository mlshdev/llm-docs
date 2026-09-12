> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/3516753-issueread](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/3516753-issueread)

# IssueRead

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn IssueRead(IOMemoryDescriptor *buffer, void *clientData, UInt64 startBlock, UInt64 blockCount);
```
