> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprotocolservices/1509457-handleaborttask](https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/1509457-handleaborttask)

# HandleAbortTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SCSIServiceResponse HandleAbortTask(UInt8 theLogicalUnit, SCSITaggedTaskIdentifier theTag);
```
