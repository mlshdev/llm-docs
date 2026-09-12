> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getnumberavailablesamplerates](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getnumberavailablesamplerates)

# GetNumberAvailableSampleRates

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets number of available sample rates of the clock device.

## Declaration

```objectivec
size_t GetNumberAvailableSampleRates();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with sample rates

- [SetSampleRate](setsamplerate.md): Sets the current sample rate for the clock device.
- [GetSampleRate](getsamplerate.md): Gets sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Gets available sample rates of the clock device.
