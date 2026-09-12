> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteqfilterparameters/frequency](https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters/frequency)

# frequency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The frequency of the equalizer filter, in hertz.

## Declaration

```swift
var frequency: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The valid range of values is `20 Hz` through `(SampleRate/2)`.

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [filterType](filtertype.md): The equalizer filter type.
- [gain](gain.md): The gain of the equalizer filter, in decibels.

# frequency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The frequency of the equalizer filter, in hertz.

## Declaration

```objectivec
@property (nonatomic) float frequency;
```

<a id="Discussion"></a>

## Discussion

The valid range of values is `20 Hz` through `(SampleRate/2)`.

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [filterType](filtertype.md): The equalizer filter type.
- [gain](gain.md): The gain of the equalizer filter, in decibels.
