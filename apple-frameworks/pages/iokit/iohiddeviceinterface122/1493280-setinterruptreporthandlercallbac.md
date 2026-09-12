> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface122/1493280-setinterruptreporthandlercallbac](https://developer.apple.com/documentation/iokit/iohiddeviceinterface122/1493280-setinterruptreporthandlercallbac)

# setInterruptReportHandlerCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Sets the report handler callout to be called when the data is received from the Interrupt-In pipe.

## Declaration

```objectivec
IOReturn (*setInterruptReportHandlerCallback)(void *self, void *reportBuffer, uint32_t reportBufferSize, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `reportBuffer`: Pointer to a preallocated buffer.
- `reportBufferSize`: Size of the reportBuffer in bytes.
- `callback`: If non-NULL, is a callback to be called when data is received from the device.
- `callbackTarget`: The callback target passed to the callback
- `callbackRefcon`: The callback refcon passed to the callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

In order for this to work correctly, you must call createAsyncPort and createAsyncEventSource.
