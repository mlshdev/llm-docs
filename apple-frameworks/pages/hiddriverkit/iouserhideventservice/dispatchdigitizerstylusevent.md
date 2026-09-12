> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/dispatchdigitizerstylusevent](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/dispatchdigitizerstylusevent)

# dispatchDigitizerStylusEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a digitizer stylus event to the system.

## Declaration

```objectivec
virtual kern_return_t dispatchDigitizerStylusEvent(uint64_t timeStamp, IOHIDDigitizerStylusData *stylusData);
```

## Parameters

- `timeStamp`: The timestamp of the event. Use the timestamp of the report element that is the source of the event.
- `stylusData`: A structure containing the stylus data. For more information, see [IOHIDDigitizerStylusData](../iohiddigitizerstylusdata.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Call this method from your event service to dispatch a stylus event to the system. Typically, you call this method when handling a report from the device, after you determine that the event originated from a stylus.

## See Also

### Dispatching Events to the System

- [dispatchDigitizerTouchEvent](dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
