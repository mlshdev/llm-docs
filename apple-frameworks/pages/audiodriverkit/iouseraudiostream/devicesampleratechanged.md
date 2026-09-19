> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/devicesampleratechanged

# DeviceSampleRateChanged

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Updates stream formats, in response to the owning audio device changing its sample rate.

## Declaration

```objectivec
kern_return_t DeviceSampleRateChanged(double in_sample_rate);
```

## Parameters

- `in_sample_rate`: The new sample rate.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method goes through all the available stream formats and selects the closet format with the matching sample rate.

Calling this method results in a call to the stream’s [HandleChangeCurrentStreamFormat](handlechangecurrentstreamformat.md) to update its format.

## See Also

### Supporting Sample Rate Changes

- [HandleChangeSampleRate](../iouseraudiodevice/handlechangesamplerate.md): Tells the device the sample rate is changing.
