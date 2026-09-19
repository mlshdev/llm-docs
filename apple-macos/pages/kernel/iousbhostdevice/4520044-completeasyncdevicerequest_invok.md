> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/4520044-completeasyncdevicerequest_invok

# CompleteAsyncDeviceRequest_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t CompleteAsyncDeviceRequest_Invoke(const IORPC rpc, OSMetaClassBase *target, CompleteAsyncDeviceRequest_Handler func);
```
