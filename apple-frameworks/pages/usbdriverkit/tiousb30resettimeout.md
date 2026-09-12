> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousb30resettimeout](https://developer.apple.com/documentation/usbdriverkit/tiousb30resettimeout)

# tIOUSB30ResetTimeout

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Constants for the reset timeout values on USB 3.0 devices.

## Declaration

```objectivec
enum tIOUSB30ResetTimeout : unsigned int;
```

<a id="Discussion"></a>

## Discussion

For information about these constants, see Table 6-21 of the USB 3.0 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Getting the Timeout Values

- [kIOUSB30ResetMinimumTimeout](tiousb30resettimeout/kiousb30resetminimumtimeout.md)
- [kIOUSB30ResetTypicalTimeout](tiousb30resettimeout/kiousb30resettypicaltimeout.md)
- [kIOUSB30ResetMaximumTimeout](tiousb30resettimeout/kiousb30resetmaximumtimeout.md)
- [kIOUSB30ResetMaximumWithMarginTimeout](tiousb30resettimeout/kiousb30resetmaximumwithmargintimeout.md)

## See Also

### Timing Parameters

- [tIOUSB30LinkStateTimeout](tiousb30linkstatetimeout.md): Constants for the link state timeout values on USB 3.0 devices.
- [tIOUSB30TimingParameters](tiousb30timingparameters.md): Constants for USB 3.0 timing parameters.
- [Timing Parameters](timing_parameters-enum.md): Constants for ping response times.
