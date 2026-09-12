> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout)

# AVAudioChannelLayout (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the roles of a set of audio channels.

## Declaration

```swift
class AVAudioChannelLayout
```

<a id="overview"></a>

## Overview

The `AVAudioChannelLayout` class is a thin wrapper for Core Audio’s [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md).

## Topics

### Creating an Audio Channel Layout

- [init(layout:)](avaudiochannellayout/init%28layout_%29.md): Creates an audio channel layout object from an existing one.
- [init(layoutTag:)](avaudiochannellayout/init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](avaudiochannelcount.md): The number of audio channels.
- [channelCount](avaudiochannellayout/channelcount.md): The number of channels of audio data.
- [layout](avaudiochannellayout/layout.md): The underlying audio channel layout.
- [layoutTag](avaudiochannellayout/layouttag.md): The audio channel’s underlying layout tag.
- [isEqual(\_:)](avaudiochannellayout/isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.

### Initializers

- [init(coder:)](avaudiochannellayout/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Formats

- [AVAudioFormat](avaudioformat.md): An object that describes the representation of an audio format.
- [AVChannelLayoutKey](avchannellayoutkey.md)
- [Linear PCM Format Settings](linear-pcm-format-settings.md): The audio settings that apply to linear PCM audio formats.
- [Format Settings](format-settings.md): The audio settings that apply to all audio formats that the audio player and recorder classes support.

# AVAudioChannelLayout (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the roles of a set of audio channels.

## Declaration

```objectivec
@interface AVAudioChannelLayout : NSObject
```

<a id="overview"></a>

## Overview

The `AVAudioChannelLayout` class is a thin wrapper for Core Audio’s [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md).

## Topics

### Creating an Audio Channel Layout

- [initWithLayout:](avaudiochannellayout/init%28layout_%29.md): Creates an audio channel layout object from an existing one.
- [layoutWithLayout:](avaudiochannellayout/layoutwithlayout_.md): Creates an audio channel layout object from an existing one.
- [initWithLayoutTag:](avaudiochannellayout/init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.
- [layoutWithLayoutTag:](avaudiochannellayout/layoutwithlayouttag_.md): Creates an audio channel layout object from an audio channel layout tag.

### Getting Audio Channel Layout Properties

- [AVAudioChannelCount](avaudiochannelcount.md): The number of audio channels.
- [channelCount](avaudiochannellayout/channelcount.md): The number of channels of audio data.
- [layout](avaudiochannellayout/layout.md): The underlying audio channel layout.
- [layoutTag](avaudiochannellayout/layouttag.md): The audio channel’s underlying layout tag.
- [isEqual:](avaudiochannellayout/isequal%28__%29.md): Indicates whether another audio channel layout is exactly equal to the current layout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formats

- [AVAudioFormat](avaudioformat.md): An object that describes the representation of an audio format.
- [AVChannelLayoutKey](avchannellayoutkey.md)
- [Linear PCM Format Settings](linear-pcm-format-settings.md): The audio settings that apply to linear PCM audio formats.
- [Format Settings](format-settings.md): The audio settings that apply to all audio formats that the audio player and recorder classes support.
