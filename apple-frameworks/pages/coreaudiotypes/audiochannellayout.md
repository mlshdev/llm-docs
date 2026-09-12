> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayout](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayout)

# AudioChannelLayout (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that specifies a channel layout in a file or in hardware.

## Declaration

```swift
struct AudioChannelLayout
```

## Topics

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [Audio Channel Layout Tags](audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

### Initializers

- [init()](audiochannellayout/init%28%29.md)
- [init(mChannelLayoutTag:mChannelBitmap:mNumberChannelDescriptions:mChannelDescriptions:)](audiochannellayout/init%28mchannellayouttag_mchannelbitmap_mnumberchanneldescriptions_mchanneldescriptions_%29.md)

### Structures

- [AudioChannelLayout.UnsafeMutablePointer](audiochannellayout/unsafemutablepointer.md)
- [AudioChannelLayout.UnsafePointer](audiochannellayout/unsafepointer.md)

### Type Methods

- [allocate(maximumDescriptions:)](audiochannellayout/allocate%28maximumdescriptions_%29.md)
- [sizeInBytes(maximumDescriptions:)](audiochannellayout/sizeinbytes%28maximumdescriptions_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Channels

- [AudioChannelDescription](audiochanneldescription.md): A structure that describes a channel of audio data.

# AudioChannelLayout (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that specifies a channel layout in a file or in hardware.

## Declaration

```objectivec
struct AudioChannelLayout;
```

## Topics

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

## See Also

### Channels

- [AudioChannelDescription](audiochanneldescription.md): A structure that describes a channel of audio data.
