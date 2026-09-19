> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usergetdatabuffer

# UserGetDataBuffer

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual kern_return_t UserGetDataBuffer(SCSIDeviceIdentifier targetID, uint64_t controllerTaskID, IOBufferMemoryDescriptor **buffer);
```
