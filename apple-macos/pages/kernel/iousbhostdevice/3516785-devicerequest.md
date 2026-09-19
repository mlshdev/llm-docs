> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/3516785-devicerequest

# deviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn deviceRequest(IOService *forClient, StandardUSB::DeviceRequest & request, IOMemoryDescriptor *dataBuffer, uint32_t & bytesTransferred, uint32_t completionTimeoutMs);
```
