> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayout/mchannelbitmap](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayout/mchannelbitmap)

# mChannelBitmap (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.

## Declaration

```swift
var mChannelBitmap: AudioChannelBitmap
```

## See Also

### Accessing the Data

- [AudioChannelBitmap](../audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](../audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](../audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [Audio Channel Layout Tags](../audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](../audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

# mChannelBitmap (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.

## Declaration

```objectivec
AudioChannelBitmap mChannelBitmap;
```

## See Also

### Accessing the Data

- [AudioChannelBitmap](../audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](../audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](../audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels](../audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.
