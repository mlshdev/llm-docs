> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/updatemeters()](https://developer.apple.com/documentation/avfaudio/avaudioplayer/updatemeters())

# updateMeters() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Refreshes the average and peak power values for all channels of an audio player.

## Declaration

```swift
func updateMeters()
```

## See Also

### Managing audio-level metering

- [isMeteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether the player is able to generate audio-level metering data.
- [averagePower(forChannel:)](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPower(forChannel:)](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

# updateMeters (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Refreshes the average and peak power values for all channels of an audio player.

## Declaration

```objectivec
- (void) updateMeters;
```

## See Also

### Managing audio-level metering

- [meteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether the player is able to generate audio-level metering data.
- [averagePowerForChannel:](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPowerForChannel:](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.
