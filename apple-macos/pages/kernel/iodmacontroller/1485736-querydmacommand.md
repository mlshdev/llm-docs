> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacontroller/1485736-querydmacommand](https://developer.apple.com/documentation/kernel/iodmacontroller/1485736-querydmacommand)

# queryDMACommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn queryDMACommand(UInt32 dmaIndex, IODMACommand **dmaCommand, IOByteCount *transferCount, bool waitForIdle);
```
