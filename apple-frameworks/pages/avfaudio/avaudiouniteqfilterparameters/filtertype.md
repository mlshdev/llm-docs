> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteqfilterparameters/filtertype](https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters/filtertype)

# filterType (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The equalizer filter type.

## Declaration

```swift
var filterType: AVAudioUnitEQFilterType { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [AVAudioUnitEQFilterType.parametric](../avaudiouniteqfiltertype/parametric.md).

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [frequency](frequency.md): The frequency of the equalizer filter, in hertz.
- [gain](gain.md): The gain of the equalizer filter, in decibels.

# filterType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The equalizer filter type.

## Declaration

```objectivec
@property (nonatomic) AVAudioUnitEQFilterType filterType;
```

<a id="Discussion"></a>

## Discussion

The default value is [AVAudioUnitEQFilterTypeParametric](../avaudiouniteqfiltertype/parametric.md).

## See Also

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](bypass.md): The bypass state of the equalizer filter band.
- [frequency](frequency.md): The frequency of the equalizer filter, in hertz.
- [gain](gain.md): The gain of the equalizer filter, in decibels.
