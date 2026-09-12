> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout/layout](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/layout)

# layout (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The underlying audio channel layout.

## Declaration

```swift
var layout: UnsafePointer<AudioChannelLayout> { get }
```

## See Also

### Related Documentation

- [init(layout:)](init%28layout_%29.md): Creates an audio channel layout object from an existing one.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layoutTag](layouttag.md): The audio channel’s underlying layout tag.
- [isEqual(\_:)](isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.

# layout (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The underlying audio channel layout.

## Declaration

```objectivec
@property (nonatomic, readonly) const AudioChannelLayout * layout;
```

## See Also

### Related Documentation

- [initWithLayout:](init%28layout_%29.md): Creates an audio channel layout object from an existing one.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](../avaudiochannelcount.md): The number of audio channels.
- [channelCount](channelcount.md): The number of channels of audio data.
- [layoutTag](layouttag.md): The audio channel’s underlying layout tag.
- [isEqual:](isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.
