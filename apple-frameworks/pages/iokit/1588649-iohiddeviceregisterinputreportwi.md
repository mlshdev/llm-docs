> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1588649-iohiddeviceregisterinputreportwi](https://developer.apple.com/documentation/iokit/1588649-iohiddeviceregisterinputreportwi)

# IOHIDDeviceRegisterInputReportWithTimeStampCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.10+

## Declaration

```objectivec
void IOHIDDeviceRegisterInputReportWithTimeStampCallback(IOHIDDeviceRef device, uint8_t *report, CFIndex reportLength, IOHIDReportWithTimeStampCallback callback, void *context);
```
