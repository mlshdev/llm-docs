> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/dispatchdigitizertouchevent](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/dispatchdigitizertouchevent)

# dispatchDigitizerTouchEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a digitizer touch event to the system.

## Declaration

```objectivec
virtual kern_return_t dispatchDigitizerTouchEvent(uint64_t timeStamp, IOHIDDigitizerTouchData *touchData, uint32_t touchDataCount);
```

## Parameters

- `timeStamp`: The timestamp of the event. Use the timestamp of the report element that is the source of the event.
- `touchData`: An array of structures containing the data for the individual touches. For more information, see [IOHIDDigitizerTouchData](../iohiddigitizertouchdata.md).
- `touchDataCount`: The number of structures in the `touchData` parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Call this method from your event service to dispatch a touch event to the system. Typically, you call this method when handling a report from the device, after you determine that the event originated from a touchscreen or touch pad.

## See Also

### Dispatching Events to the System

- [dispatchDigitizerStylusEvent](dispatchdigitizerstylusevent.md): Dispatches a digitizer stylus event to the system.
