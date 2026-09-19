> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicedeviceinterface/1395715-getproperty

# getProperty

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains a property related to the IOHIDDevice.

## Declaration

```objectivec
IOReturn (*getProperty)(void *self, CFStringRef key, CFTypeRef *pProperty);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceDeviceInterface.
- `key`: CFStringRef key
- `pProperty`: Pointer to a CFTypeRef property.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful.

<a id="discussion"></a>

## Discussion

Property keys are prefixed by kIOHIDDevice and declared in IOHIDKeys.h.
