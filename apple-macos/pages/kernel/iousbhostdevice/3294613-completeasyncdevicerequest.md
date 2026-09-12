> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3294613-completeasyncdevicerequest](https://developer.apple.com/documentation/kernel/iousbhostdevice/3294613-completeasyncdevicerequest)

# CompleteAsyncDeviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
void CompleteAsyncDeviceRequest(OSAction *action, IOReturn status, uint32_t bytesTransferred, OSDispatchMethod supermethod);
```
