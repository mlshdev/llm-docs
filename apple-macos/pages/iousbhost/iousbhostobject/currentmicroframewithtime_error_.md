> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/currentmicroframewithtime:error:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/currentmicroframewithtime:error:)

# currentMicroframeWithTime:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (uint64_t) currentMicroframeWithTime:(IOUSBHostTime *) time error:(NSError **) error;
```

## Parameters

- `time`: If not nil, this will be updated with system time associated with the microframe.

<a id="return-value"></a>

## Return Value

The current microframe number. Returns 0 on failure, with NSError populated with the IOReturn error code.

<a id="discussion"></a>

## Discussion

Return the current microframe number of the USB controller

This method will return the current microframe number of the USB controller. This is most useful for scheduling future isochronous requests.
