> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface121/1493257-getreport](https://developer.apple.com/documentation/iokit/iohiddeviceinterface121/1493257-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Obtains a report from the device.

## Declaration

```objectivec
IOReturn (*getReport)(void *self, IOHIDReportType reportType, uint32_t reportID, void *reportBuffer, uint32_t *reportBufferSize, uint32_t timeoutMS, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `reportType`: The report type.
- `reportID`: The report ID.
- `reportBuffer`: Pointer to a preallocated buffer.
- `reportBufferSize`: Size of the reportBuffer in bytes. When finished, will contain the actual size of the report.
- `timeoutMS`:
- `callback`: If null, this method will behave synchronously.
- `callbackTarget`: The callback target passed to the callback.
- `callbackRefcon`: The callback refcon passed to the callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.
