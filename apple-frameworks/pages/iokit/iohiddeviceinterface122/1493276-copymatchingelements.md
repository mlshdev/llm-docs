> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface122/1493276-copymatchingelements](https://developer.apple.com/documentation/iokit/iohiddeviceinterface122/1493276-copymatchingelements)

# copyMatchingElements

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Obtains specific elements defined by the device.

## Declaration

```objectivec
IOReturn (*copyMatchingElements)(void *self, CFDictionaryRef matchingDict, CFArrayRef *elements);
```

## Parameters

- `matchingDict`: Dictionary containg key/value pairs to match on. Pass a null value to match on all elements.
- `elements`: Pointer to a CFArrayRef that will be returned by this method. It is up to the caller to release it when finished.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

Using keys defined in IOHIDKeys.h for elements, create a matching dictonary containing items that you wish to search for. A null array indicates that no elements matching that criteria were found. Each item in the array is a reference to the same dictionary item that represents each element in the I/O Registry. It is up to the caller to release the returned array of elements.
