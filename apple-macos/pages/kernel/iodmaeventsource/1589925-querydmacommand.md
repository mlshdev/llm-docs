> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmaeventsource/1589925-querydmacommand](https://developer.apple.com/documentation/kernel/iodmaeventsource/1589925-querydmacommand)

# queryDMACommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn queryDMACommand(IODMACommand **dmaCommand, IOByteCount *transferCount, bool waitForIdle);
```
