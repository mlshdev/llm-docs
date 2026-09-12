> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayouttag_getnumberofchannels(_:)](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayouttag_getnumberofchannels(_:))

# AudioChannelLayoutTag_GetNumberOfChannels(\_:) (Swift)

**Framework:** Core Audio Types  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Retrieves the number of channels from an audio channel layout tag.

## Declaration

```swift
func AudioChannelLayoutTag_GetNumberOfChannels(_ inLayoutTag: AudioChannelLayoutTag) -> UInt32
```

## Parameters

- `inLayoutTag`: The layout tag from which to retrieve the number of channels.

<a id="return-value"></a>

## Return Value

A count of audio channels.

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [Audio Channel Layout Tags](audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.

# AudioChannelLayoutTag_GetNumberOfChannels (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the number of channels from an audio channel layout tag.

## Declaration

```objectivec
static UInt32 AudioChannelLayoutTag_GetNumberOfChannels(AudioChannelLayoutTag inLayoutTag);
```

## Parameters

- `inLayoutTag`: The layout tag from which to retrieve the number of channels.

<a id="return-value"></a>

## Return Value

A count of audio channels.

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
