> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setsamplerate](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setsamplerate)

# SetSampleRate

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetSampleRate](getsamplerate.md): Gets sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](getnumberavailablesamplerates.md): Gets number of available sample rates of the clock device.
