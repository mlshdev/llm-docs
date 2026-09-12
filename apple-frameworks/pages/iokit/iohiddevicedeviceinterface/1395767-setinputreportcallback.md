> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicedeviceinterface/1395767-setinputreportcallback](https://developer.apple.com/documentation/iokit/iohiddevicedeviceinterface/1395767-setinputreportcallback)

# setInputReportCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Sets the input report callback to be used when data is received from the Input pipe.

## Declaration

```objectivec
IOReturn (*setInputReportCallback)(void *self, uint8_t *report, CFIndex reportLength, IOHIDReportCallback callback, void *context, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceDeviceInterface.
- `report`: Pointer to a pre-allocated buffer to be filled and passed back via the callback.
- `reportLength`: Length of the report buffer.
- `callback`: Callback of type IOHIDReportCallback to be used when report data has been receieved by the IOHIDDevice.
- `context`: Pointer to data to be passed to the callback.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

In order to function properly, the event source obtained using getAsyncEventSource must be added to a run loop.
