> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostinterface/3516802-devicerequest

# deviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn deviceRequest(StandardUSB::DeviceRequest & request, void *dataBuffer, uint32_t & bytesTransferred, uint32_t completionTimeoutMs);
```
