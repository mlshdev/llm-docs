> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/2937933-iohiddevicegetvaluewithoptions

# IOHIDDeviceGetValueWithOptions

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

## Declaration

```objectivec
IOReturn IOHIDDeviceGetValueWithOptions(IOHIDDeviceRef device, IOHIDElementRef element, IOHIDValueRef  _Nonnull *pValue, uint32_t options);
```
