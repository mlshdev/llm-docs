> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getavailablesamplerates

# GetAvailableSampleRates

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets available sample rates of the clock device.

## Declaration

```objectivec
size_t GetAvailableSampleRates(double *out_sample_rates, size_t in_num_rates);
```

## Parameters

- `out_sample_rates`: Pointer to a buffer of double’s with size corresponding to in_num_rates
- `in_num_rates`:

<a id="return-value"></a>

## Return Value

Size_t indicating how many rates were set in the out_sample_rates buffer.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with sample rates

- [SetSampleRate](setsamplerate.md): Beta. Sets the current sample rate for the clock device.
- [GetSampleRate](getsamplerate.md): Beta. Gets sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Beta. Sets the available sample rates for the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Beta. Gets number of available sample rates of the clock device.
