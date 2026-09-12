> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicedeviceinterface/1395737-getreport](https://developer.apple.com/documentation/iokit/iohiddevicedeviceinterface/1395737-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains a report of type kIOHIDReportTypeInput or kIOHIDReportTypeFeature from the IOHIDDevice.

## Declaration

```objectivec
IOReturn (*getReport)(void *self, IOHIDReportType reportType, uint32_t reportID, uint8_t *report, CFIndex *pReportLength, uint32_t timeout, IOHIDReportCallback callback, void *context, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceDeviceInterface.
- `reportType`: The report type.
- `reportID`: The report id.
- `report`: Pointer to a pre-allocated buffer to be filled.
- `reportLength`: Length of the report buffer. When finished, this will contain the actual length of the report.
- `timeout`: Timeout in milliseconds for issuing the getReport.
- `callback`: Callback of type IOHIDReportCallback to be used when report data has been received from the device. If null, this method will behave synchronously.
- `context`: Pointer to data to be passed to the callback.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

This method is useful if specific knowledge of the unparsed report is known to the caller. Otherwise, using an IOHIDDeviceTransactionInterface with the kIOHIDTransactionDirectionTypeInput direction is recommended.

**Note:** In order to make use of asynchronous behavior, the event source obtained using getAsyncEventSource must be added to a run loop.
