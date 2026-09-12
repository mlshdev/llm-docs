> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout/isequal(_:)](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/isequal(_:))

# isEqual(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether another audio channel layout is exactly equal to the current layout.

## Declaration

```swift
func isEqual(_ object: Any) -> Bool
```

## Parameters

- `object`: The audio channel layout object to compare.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) indicates whether they are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layout](layout.md): The underlying audio channel layout.
- [layoutTag](layouttag.md): The audio channel’s underlying layout tag.

# isEqual: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether another audio channel layout is exactly equal to the current layout.

## Declaration

```objectivec
- (BOOL) isEqual:(id) object;
```

## Parameters

- `object`: The audio channel layout object to compare.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) indicates whether they are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layout](layout.md): The underlying audio channel layout.
- [layoutTag](layouttag.md): The audio channel’s underlying layout tag.
