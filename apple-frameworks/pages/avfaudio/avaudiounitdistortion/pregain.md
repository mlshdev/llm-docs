> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdistortion/pregain](https://developer.apple.com/documentation/avfaudio/avaudiounitdistortion/pregain)

# preGain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The gain that the audio unit applies to the signal before distortion, in decibels.

## Declaration

```swift
var preGain: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `-6 dB`. The valid range of values is `-80 dB` to `20 dB`.

## See Also

### Getting and setting the distortion values

- [wetDryMix](wetdrymix.md): The blend of the distorted and dry signals.

# preGain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The gain that the audio unit applies to the signal before distortion, in decibels.

## Declaration

```objectivec
@property (nonatomic) float preGain;
```

<a id="Discussion"></a>

## Discussion

The default value is `-6 dB`. The valid range of values is `-80 dB` to `20 dB`.

## See Also

### Getting and setting the distortion values

- [wetDryMix](wetdrymix.md): The blend of the distorted and dry signals.
