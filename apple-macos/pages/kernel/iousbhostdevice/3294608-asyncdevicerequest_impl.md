> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/3294608-asyncdevicerequest_impl

# AsyncDeviceRequest_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t AsyncDeviceRequest_Impl(IOService *forClient, uint8_t bmRequestType, uint8_t bRequest, uint16_t wValue, uint16_t wIndex, uint16_t wLength, IOMemoryDescriptor *dataBuffer, OSAction *completion, uint32_t completionTimeoutMs);
```
