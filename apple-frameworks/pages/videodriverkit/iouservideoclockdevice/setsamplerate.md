> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setsamplerate

# SetSampleRate

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the current sample rate for the clock device.

## Declaration

```objectivec
kern_return_t SetSampleRate(double in_sample_rate);
```

## Parameters

- `in_sample_rate`: The sample rate to set on the clock device..

<a id="discussion"></a>

## Discussion

Changing the sample rate will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the sample rate.

## See Also

### Working with sample rates

- [GetSampleRate](getsamplerate.md): Beta. Gets sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Beta. Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Beta. Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Beta. Gets number of available sample rates of the clock device.
