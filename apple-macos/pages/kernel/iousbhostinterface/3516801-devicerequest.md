> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/3516801-devicerequest](https://developer.apple.com/documentation/kernel/iousbhostinterface/3516801-devicerequest)

# deviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn deviceRequest(StandardUSB::DeviceRequest & request, IOMemoryDescriptor *dataBuffer, IOUSBHostCompletion *completion, uint32_t completionTimeoutMs);
```
