> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/handlechangesamplerate](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/handlechangesamplerate)

# HandleChangeSampleRate

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the clock device the sample rate is changing.

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

The default implementation calls [SetSampleRate](setsamplerate.md) and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle changes to the sample rate and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.
