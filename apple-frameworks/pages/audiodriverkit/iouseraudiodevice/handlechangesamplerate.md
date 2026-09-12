> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/handlechangesamplerate](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/handlechangesamplerate)

# HandleChangeSampleRate

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the device the sample rate is changing.

## Declaration

```objectivec
virtual kern_return_t HandleChangeSampleRate(double in_sample_rate);
```

## Parameters

- `in_sample_rate`: The sample rate to set, if possible, as a `double`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation calls [SetSampleRate](../iouseraudioclockdevice/setsamplerate.md) and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle changes to the sample rate and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.

## See Also

### Supporting Sample Rate Changes

- [DeviceSampleRateChanged](../iouseraudiostream/devicesampleratechanged.md): Updates stream formats, in response to the owning audio device changing its sample rate.
