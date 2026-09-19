> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/layouttag

# layoutTag (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio channel’s underlying layout tag.

## Declaration

```swift
var layoutTag: AudioChannelLayoutTag { get }
```

## See Also

### Related Documentation

- [init(layoutTag:)](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layout](layout.md): The underlying audio channel layout.
- [isEqual(\_:)](isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.

# layoutTag (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio channel’s underlying layout tag.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioChannelLayoutTag layoutTag;
```

## See Also

### Related Documentation

- [layoutWithLayoutTag:](layoutwithlayouttag_.md): Creates an audio channel layout object from an audio channel layout tag.
- [initWithLayoutTag:](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layout](layout.md): The underlying audio channel layout.
- [isEqual:](isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.
