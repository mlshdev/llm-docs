> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/averagepower(forchannel:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/averagepower(forchannel:))

# averagePower(forChannel:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the average power, in decibels full-scale (dBFS), for an audio channel.

## Declaration

```swift
func averagePower(forChannel channelNumber: Int) -> Float
```

## Parameters

- `channelNumber`: The number of the channel that you want the average power value for.

<a id="return-value"></a>

## Return Value

The audio channel’s current average power.

<a id="Discussion"></a>

## Discussion

Before asking the player for its average power value, you must call [updateMeters()](../avaudioplayer/updatemeters%28%29.md) to generate the latest data. The returned value ranges from `–160` dBFS, indicating minimum power, to 0 dBFS, indicating maximum power.

## See Also

### Managing audio-level metering

- [isMeteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [updateMeters()](updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio recorder.
- [peakPower(forChannel:)](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

# averagePowerForChannel: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the average power, in decibels full-scale (dBFS), for an audio channel.

## Declaration

```objectivec
- (float) averagePowerForChannel:(NSUInteger) channelNumber;
```

## Parameters

- `channelNumber`: The number of the channel that you want the average power value for.

<a id="return-value"></a>

## Return Value

The audio channel’s current average power.

<a id="Discussion"></a>

## Discussion

Before asking the player for its average power value, you must call [updateMeters](../avaudioplayer/updatemeters%28%29.md) to generate the latest data. The returned value ranges from `–160` dBFS, indicating minimum power, to 0 dBFS, indicating maximum power.

## See Also

### Managing audio-level metering

- [meteringEnabled](ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [updateMeters](updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio recorder.
- [peakPowerForChannel:](peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.
