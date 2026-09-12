> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayouttag](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayouttag)

# AudioChannelLayoutTag (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Identifies a previously-defined channel layout.

## Declaration

```swift
typealias AudioChannelLayoutTag = UInt32
```

<a id="Discussion"></a>

## Discussion

This data type is used for the `mChannelLayoutTag` field of the [AudioChannelLayout](audiochannellayout.md) structure. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [Audio Channel Layout Tags](audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

# AudioChannelLayoutTag (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Identifies a previously-defined channel layout.

## Declaration

```objectivec
typedef UInt32 AudioChannelLayoutTag;
```

<a id="Discussion"></a>

## Discussion

This data type is used for the `mChannelLayoutTag` field of the [AudioChannelLayout](audiochannellayout.md) structure. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.
