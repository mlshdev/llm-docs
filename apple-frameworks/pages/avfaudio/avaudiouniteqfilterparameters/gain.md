> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteqfilterparameters/gain](https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters/gain)

# gain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The gain of the equalizer filter, in decibels.

## Declaration

```swift
var gain: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0 dB`. The valid range of values is `-96 dB` through `24 dB`.

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [filterType](filtertype.md): The equalizer filter type.
- [frequency](frequency.md): The frequency of the equalizer filter, in hertz.

# gain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The gain of the equalizer filter, in decibels.

## Declaration

```objectivec
@property (nonatomic) float gain;
```

<a id="Discussion"></a>

## Discussion

The default value is `0 dB`. The valid range of values is `-96 dB` through `24 dB`.

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [filterType](filtertype.md): The equalizer filter type.
- [frequency](frequency.md): The frequency of the equalizer filter, in hertz.
