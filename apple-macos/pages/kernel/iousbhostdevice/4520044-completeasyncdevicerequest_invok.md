> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/4520044-completeasyncdevicerequest_invok](https://developer.apple.com/documentation/kernel/iousbhostdevice/4520044-completeasyncdevicerequest_invok)

# CompleteAsyncDeviceRequest_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t CompleteAsyncDeviceRequest_Invoke(const IORPC rpc, OSMetaClassBase *target, CompleteAsyncDeviceRequest_Handler func);
```
