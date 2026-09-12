> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getavailablesamplerates](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getavailablesamplerates)

# GetAvailableSampleRates

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the available sample rates of the clock device.

## Declaration

```objectivec
size_t GetAvailableSampleRates(double *out_sample_rates, size_t in_num_rates);
```

## Parameters

- `out_sample_rates`: A pointer to a buffer of type `double` whose size corresponds to `in_num_rates`. After the call completes, this buffer contains the available sample rates.
- `in_num_rates`: The number of rates in the `out_sample_rates` buffer.

<a id="return-value"></a>

## Return Value

A `size_t` that indicates how many rates were set in the `out_sample_rates` buffer.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Sample Rates

- [SetSampleRate](setsamplerate.md): Sets the sample rate for the clock device.
- [GetSampleRate](getsamplerate.md): Gets the sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Gets the number of available sample rates of the clock device.
