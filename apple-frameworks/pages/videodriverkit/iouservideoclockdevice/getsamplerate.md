> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getsamplerate

# GetSampleRate

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets sample rate of the clock device.

## Declaration

```objectivec
double GetSampleRate();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with sample rates

- [SetSampleRate](setsamplerate.md): Beta. Sets the current sample rate for the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Beta. Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Beta. Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Beta. Gets number of available sample rates of the clock device.
