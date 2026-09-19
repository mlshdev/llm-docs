> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setavailablesamplerates

# SetAvailableSampleRates

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the available sample rates for the clock device.

## Declaration

```objectivec
kern_return_t SetAvailableSampleRates(const double *in_sample_rates, size_t in_num_rates);
```

## Parameters

- `in_sample_rates`: Pointer to a buffer of double’’s with size corresponding to in_num_rates.
- `in_num_rates`: Size_t of the number of sample rates in in_sample_rates buffer.

<a id="discussion"></a>

## Discussion

Changing the available sample rates will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the sample rates.

## See Also

### Working with sample rates

- [SetSampleRate](setsamplerate.md): Beta. Sets the current sample rate for the clock device.
- [GetSampleRate](getsamplerate.md): Beta. Gets sample rate of the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Beta. Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Beta. Gets number of available sample rates of the clock device.
