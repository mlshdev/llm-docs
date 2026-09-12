> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprotocolinterface/1571657-aborttask](https://developer.apple.com/documentation/kernel/ioscsiprotocolinterface/1571657-aborttask)

# AbortTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SCSIServiceResponse AbortTask(UInt8 theLogicalUnit, SCSITaggedTaskIdentifier theTag);
```
