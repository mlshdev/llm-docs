> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteq/bands](https://developer.apple.com/documentation/avfaudio/avaudiouniteq/bands)

# bands (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of equalizer filter parameters.

## Declaration

```swift
var bands: [AVAudioUnitEQFilterParameters] { get }
```

<a id="Discussion"></a>

## Discussion

The number of elements in the array is equal to the number of bands.

## See Also

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](../avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [globalGain](globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.

# bands (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of equalizer filter parameters.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAudioUnitEQFilterParameters *> * bands;
```

<a id="Discussion"></a>

## Discussion

The number of elements in the array is equal to the number of bands.

## See Also

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](../avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [globalGain](globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.
