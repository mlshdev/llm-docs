> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiperipheraldevicenub/1569615-aborttask](https://developer.apple.com/documentation/kernel/ioscsiperipheraldevicenub/1569615-aborttask)

# AbortTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SCSIServiceResponse AbortTask(UInt8 theLogicalUnit, SCSITaggedTaskIdentifier theTag);
```
