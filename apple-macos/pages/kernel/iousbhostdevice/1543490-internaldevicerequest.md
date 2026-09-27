> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/1543490-internaldevicerequest

# internalDeviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn internalDeviceRequest(IOService *forClient, StandardUSB::DeviceRequest & request, void *rawBuffer, IOMemoryDescriptor *descriptorBuffer, uint32_t & bytesTransferred, IOUSBHostCompletion *completion, uint32_t completionTimeoutMs);
```
