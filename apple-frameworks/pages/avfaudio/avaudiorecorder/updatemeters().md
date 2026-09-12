> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/updatemeters()](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/updatemeters())

# updateMeters() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Refreshes the average and peak power values for all channels of an audio recorder.

## Declaration

```swift
func updateMeters()
```

<a id="Discussion"></a>

## Discussion

Call this method to update the level meter data before calling [averagePower(forChannel:)](averagepower%28forchannel_%29.md) or [peakPower(forChannel:)](peakpower%28forchannel_%29.md).

## See Also

### Managing audio-level metering

- [isMeteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [averagePower(forChannel:)](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPower(forChannel:)](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

# updateMeters (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Refreshes the average and peak power values for all channels of an audio recorder.

## Declaration

```objectivec
- (void) updateMeters;
```

<a id="Discussion"></a>

## Discussion

Call this method to update the level meter data before calling [averagePowerForChannel:](averagepower%28forchannel_%29.md) or [peakPowerForChannel:](peakpower%28forchannel_%29.md).

## See Also

### Managing audio-level metering

- [meteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [averagePowerForChannel:](averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPowerForChannel:](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.
