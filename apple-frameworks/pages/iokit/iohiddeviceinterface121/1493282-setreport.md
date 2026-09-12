> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface121/1493282-setreport](https://developer.apple.com/documentation/iokit/iohiddeviceinterface121/1493282-setreport)

# setReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Sends a report to the device.

## Declaration

```objectivec
IOReturn (*setReport)(void *self, IOHIDReportType reportType, uint32_t reportID, void *reportBuffer, uint32_t reportBufferSize, uint32_t timeoutMS, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `reportType`: The report type.
- `reportID`: The report id.
- `reportBuffer`: Pointer to a preallocated buffer.
- `reportBufferSize`: Size of the reportBuffer in bytes.
- `timeoutMS`:
- `callback`: If null, this method will behave synchronously.
- `callbackTarget`: The callback target passed to the callback.
- `callbackRefcon`: The callback refcon passed to the callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.
