> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousb30timingparameters](https://developer.apple.com/documentation/usbdriverkit/tiousb30timingparameters)

# tIOUSB30TimingParameters

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Constants for USB 3.0 timing parameters.

## Declaration

```objectivec
enum tIOUSB30TimingParameters : unsigned int;
```

<a id="Discussion"></a>

## Discussion

For information about these constants, see Table 8-36 of the USB 3.1 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Getting the Timing Parameters

- [kIOUSB30TimingParameterBELTDefaultNs](tiousb30timingparameters/kiousb30timingparameterbeltdefaultns.md)
- [kIOUSB30TimingParameterBELTMinNs](tiousb30timingparameters/kiousb30timingparameterbeltminns.md)

## See Also

### Timing Parameters

- [tIOUSB30LinkStateTimeout](tiousb30linkstatetimeout.md): Constants for the link state timeout values on USB 3.0 devices.
- [tIOUSB30ResetTimeout](tiousb30resettimeout.md): Constants for the reset timeout values on USB 3.0 devices.
- [Timing Parameters](timing_parameters-enum.md): Constants for ping response times.
