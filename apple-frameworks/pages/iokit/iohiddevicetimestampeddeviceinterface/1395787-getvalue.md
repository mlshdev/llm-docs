> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395787-getvalue

# getValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*getValue)(void *self, IOHIDElementRef element, IOHIDValueRef *pValue, uint32_t timeout, IOHIDValueCallback callback, void *context, IOOptionBits options);
```
