> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/referencemicroframewithtime:error:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/referencemicroframewithtime:error:)

# referenceMicroframeWithTime:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (uint64_t) referenceMicroframeWithTime:(IOUSBHostTime *) time error:(NSError **) error;
```

## Parameters

- `time`: If not nil, this will be updated with system time associated with the microframe.

<a id="return-value"></a>

## Return Value

A recent microframe number. Returns 0 on failure, with NSError populated with the IOReturn error code.

<a id="discussion"></a>

## Discussion

Return a recent microframe number of the USB controller

This method will return a recent microframe number of the USB controller. This is most useful for scheduling future isochronous requests.
