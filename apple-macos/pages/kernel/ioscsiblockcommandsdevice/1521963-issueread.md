> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1521963-issueread](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1521963-issueread)

# IssueRead

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn IssueRead(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount);
```
