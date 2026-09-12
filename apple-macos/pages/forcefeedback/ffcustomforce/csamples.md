> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcustomforce/csamples](https://developer.apple.com/documentation/forcefeedback/ffcustomforce/csamples)

# cSamples (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.

## Declaration

```swift
var cSamples: DWORD
```

## See Also

### Instance Properties

- [cChannels](cchannels.md): Number of channels (axes) affected by this force.
- [dwSamplePeriod](dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.

# cSamples (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.

## Declaration

```objectivec
DWORD cSamples;
```

## See Also

### Instance Properties

- [cChannels](cchannels.md): Number of channels (axes) affected by this force.
- [dwSamplePeriod](dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.
