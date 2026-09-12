> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3294651-asyncdevicerequestcompletioncall](https://developer.apple.com/documentation/kernel/iousbhostdevice/3294651-asyncdevicerequestcompletioncall)

# asyncDeviceRequestCompletionCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static void asyncDeviceRequestCompletionCallback(void *owner, void *parameter, IOReturn status, uint32_t bytesTransferred);
```
