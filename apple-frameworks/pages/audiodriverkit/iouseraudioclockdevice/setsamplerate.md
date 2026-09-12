> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setsamplerate](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setsamplerate)

# SetSampleRate

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the sample rate for the clock device.

## Declaration

```objectivec
kern_return_t SetSampleRate(double in_sample_rate);
```

## Parameters

- `in_sample_rate`: The sample rate to set on the clock device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the sample rate sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Sample Rates

- [GetSampleRate](getsamplerate.md): Gets the sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Gets the available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Gets the number of available sample rates of the clock device.
