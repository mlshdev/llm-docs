> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetimestampeddeviceinterface/1395773-setvalue](https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395773-setvalue)

# setValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*setValue)(void *self, IOHIDElementRef element, IOHIDValueRef value, uint32_t timeout, IOHIDValueCallback callback, void *context, IOOptionBits options);
```
