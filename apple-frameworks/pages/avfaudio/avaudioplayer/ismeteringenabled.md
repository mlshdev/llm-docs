> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/ismeteringenabled](https://developer.apple.com/documentation/avfaudio/avaudioplayer/ismeteringenabled)

# isMeteringEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the player is able to generate audio-level metering data.

## Declaration

```swift
var isMeteringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the player doesn’t generate audio-level metering data. Because metering uses computing resources, enable it only if you intend to use it.

## See Also

### Managing audio-level metering

- [updateMeters()](updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio player.
- [averagePower(forChannel:)](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPower(forChannel:)](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

# meteringEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the player is able to generate audio-level metering data.

## Declaration

```objectivec
@property (getter=isMeteringEnabled) BOOL meteringEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, the player doesn’t generate audio-level metering data. Because metering uses computing resources, enable it only if you intend to use it.

## See Also

### Managing audio-level metering

- [updateMeters](updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio player.
- [averagePowerForChannel:](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPowerForChannel:](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.
