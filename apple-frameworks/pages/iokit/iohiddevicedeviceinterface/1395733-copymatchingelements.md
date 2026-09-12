> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicedeviceinterface/1395733-copymatchingelements](https://developer.apple.com/documentation/iokit/iohiddevicedeviceinterface/1395733-copymatchingelements)

# copyMatchingElements

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains a CFArrayRef containing the IOHIDDeviceDeviceInterface elements that match the passed matching dictionary.

## Declaration

```objectivec
IOReturn (*copyMatchingElements)(void *self, CFDictionaryRef matchingDict, CFArrayRef *pElements, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceDeviceInterface.
- `matchingDict`: CFDictionaryRef containing the element properties to match on.
- `pElements`: CFArrayRef containing matched elements.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Objects contained in the returned array are of type IOHIDElementRef. Please see IOHIDElement.h for additional API information. Elemenet properties are prefixed by kIOHIDElement and declared in IOHIDKeys.h.
