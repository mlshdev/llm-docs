> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getsamplerate](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getsamplerate)

# GetSampleRate

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [SetSampleRate](setsamplerate.md): Sets the current sample rate for the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Gets number of available sample rates of the clock device.
