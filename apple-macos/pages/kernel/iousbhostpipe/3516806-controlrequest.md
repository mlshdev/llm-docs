> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3516806-controlrequest](https://developer.apple.com/documentation/kernel/iousbhostpipe/3516806-controlrequest)

# controlRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn controlRequest(IOService *forClient, StandardUSB::DeviceRequest & request, IOMemoryDescriptor *dataBuffer, IOUSBHostCompletion *completion, uint32_t completionTimeoutMs);
```
