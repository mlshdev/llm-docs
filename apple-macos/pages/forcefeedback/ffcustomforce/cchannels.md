> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcustomforce/cchannels](https://developer.apple.com/documentation/forcefeedback/ffcustomforce/cchannels)

# cChannels (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Number of channels (axes) affected by this force.

## Declaration

```swift
var cChannels: DWORD
```

<a id="Discussion"></a>

## Discussion

The first channel is applied to the first axis associated with the effect, the second to the second, and so on. If there are fewer channels than axes, nothing is associated with the extra axes.

If there is only a single channel, the effect is rotated in the direction specified by the rglDirection member of the FFEFFECT structure. If there is more than one channel, rotation is not allowed.

Not all devices support rotation of custom effects.

## See Also

### Instance Properties

- [cSamples](csamples.md): Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.
- [dwSamplePeriod](dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.

# cChannels (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Number of channels (axes) affected by this force.

## Declaration

```objectivec
DWORD cChannels;
```

<a id="Discussion"></a>

## Discussion

The first channel is applied to the first axis associated with the effect, the second to the second, and so on. If there are fewer channels than axes, nothing is associated with the extra axes.

If there is only a single channel, the effect is rotated in the direction specified by the rglDirection member of the FFEFFECT structure. If there is more than one channel, rotation is not allowed.

Not all devices support rotation of custom effects.

## See Also

### Instance Properties

- [cSamples](csamples.md): Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.
- [dwSamplePeriod](dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.
