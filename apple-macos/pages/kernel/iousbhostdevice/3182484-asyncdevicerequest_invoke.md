> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3182484-asyncdevicerequest_invoke](https://developer.apple.com/documentation/kernel/iousbhostdevice/3182484-asyncdevicerequest_invoke)

# AsyncDeviceRequest_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t AsyncDeviceRequest_Invoke(const IORPC rpc, OSMetaClassBase *target, AsyncDeviceRequest_Handler func);
```
