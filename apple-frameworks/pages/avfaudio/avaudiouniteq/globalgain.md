> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteq/globalgain](https://developer.apple.com/documentation/avfaudio/avaudiouniteq/globalgain)

# globalGain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The overall gain adjustment that the audio unit applies to the signal, in decibels.

## Declaration

```swift
var globalGain: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0 db`. The valid range of values is `-96 db` to `24 db`.

## See Also

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](../avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [bands](bands.md): An array of equalizer filter parameters.

# globalGain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The overall gain adjustment that the audio unit applies to the signal, in decibels.

## Declaration

```objectivec
@property (nonatomic) float globalGain;
```

<a id="Discussion"></a>

## Discussion

The default value is `0 db`. The valid range of values is `-96 db` to `24 db`.

## See Also

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](../avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [bands](bands.md): An array of equalizer filter parameters.
