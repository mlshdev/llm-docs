> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayout/mchanneldescriptions](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayout/mchanneldescriptions)

# mChannelDescriptions (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.

## Declaration

```swift
var mChannelDescriptions: AudioChannelDescription
```

## See Also

### Accessing the Data

- [mChannelBitmap](mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](../audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelLayoutTag](mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](../audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](../audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [Audio Channel Layout Tags](../audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](../audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

# mChannelDescriptions (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.

## Declaration

```objectivec
AudioChannelDescription mChannelDescriptions[1];
```

## See Also

### Accessing the Data

- [mChannelBitmap](mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](../audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelLayoutTag](mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](../audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](../audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels](../audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.
