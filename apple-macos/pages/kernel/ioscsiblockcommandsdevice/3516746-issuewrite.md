> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/3516746-issuewrite](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/3516746-issuewrite)

# IssueWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn IssueWrite(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount, void *clientData);
```
