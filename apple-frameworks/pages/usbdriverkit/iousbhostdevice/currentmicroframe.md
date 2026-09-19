> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/currentmicroframe

# CurrentMicroframe

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
virtual kern_return_t CurrentMicroframe(uint64_t *microframeNumber, uint64_t *theTime);
```

## Parameters

- `microframeNumber`: uint64_t pointer to be updated with the current microframe number
- `theTime`: If not NULL, this will be updated with the system time assosiated with the returned microframe

<a id="return-value"></a>

## Return Value

KERN_SUCCESS is successful see IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Return the current microframe number of the USB controller.

This method will return the current microframe number of the USB controller This is most useful for scheduling future isochronous requests.
