> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getnumberavailablesamplerates](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getnumberavailablesamplerates)

# GetNumberAvailableSampleRates

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the number of available sample rates of the clock device.

## Declaration

```objectivec
size_t GetNumberAvailableSampleRates();
```

<a id="return-value"></a>

## Return Value

The number of available sample rates of the clock device.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Sample Rates

- [SetSampleRate](setsamplerate.md): Sets the sample rate for the clock device.
- [GetSampleRate](getsamplerate.md): Gets the sample rate of the clock device.
- [SetAvailableSampleRates](setavailablesamplerates.md): Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](getavailablesamplerates.md): Gets the available sample rates of the clock device.
