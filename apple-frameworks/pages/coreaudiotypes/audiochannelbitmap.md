> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelbitmap](https://developer.apple.com/documentation/coreaudiotypes/audiochannelbitmap)

# AudioChannelBitmap (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The supported channel bitmaps to use when defining channel layouts.

## Declaration

```swift
struct AudioChannelBitmap
```

## Topics

### Left

- [bit_Left](audiochannelbitmap/bit_left.md): The left channel.
- [bit_LeftCenter](audiochannelbitmap/bit_leftcenter.md): The left center channel.
- [bit_LeftSurround](audiochannelbitmap/bit_leftsurround.md): The left surround channel.
- [bit_LeftSurroundDirect](audiochannelbitmap/bit_leftsurrounddirect.md): The left surround direct channel.
- [bit_LeftTopFront](audiochannelbitmap/bit_lefttopfront.md): The left-top front channel.
- [bit_LeftTopMiddle](audiochannelbitmap/bit_lefttopmiddle.md): The left-top middle channel.
- [bit_LeftTopRear](audiochannelbitmap/bit_lefttoprear.md): The left-top rear channel.
- [bit_TopBackLeft](audiochannelbitmap/bit_topbackleft.md): The top-back left channel.
- [bit_VerticalHeightLeft](audiochannelbitmap/bit_verticalheightleft.md): The vertical height left channel.

### Center

- [bit_Center](audiochannelbitmap/bit_center.md): The center channel.
- [bit_CenterSurround](audiochannelbitmap/bit_centersurround.md): The center surround channel.
- [bit_CenterTopFront](audiochannelbitmap/bit_centertopfront.md): The top-front center channel.
- [bit_CenterTopMiddle](audiochannelbitmap/bit_centertopmiddle.md): The top-middle center channel.
- [bit_CenterTopRear](audiochannelbitmap/bit_centertoprear.md): The top-right center channel.
- [bit_TopBackCenter](audiochannelbitmap/bit_topbackcenter.md): The top-back center channel.
- [bit_TopCenterSurround](audiochannelbitmap/bit_topcentersurround.md): The top center surround channel.
- [bit_VerticalHeightCenter](audiochannelbitmap/bit_verticalheightcenter.md): The vertical height center channel.

### Right

- [bit_Right](audiochannelbitmap/bit_right.md): The right channel.
- [bit_RightCenter](audiochannelbitmap/bit_rightcenter.md): The right center channel.
- [bit_RightSurround](audiochannelbitmap/bit_rightsurround.md): The rIght surround channel.
- [bit_RightSurroundDirect](audiochannelbitmap/bit_rightsurrounddirect.md): The right surround direct channel.
- [bit_RightTopFront](audiochannelbitmap/bit_righttopfront.md): The top-front front channel.
- [bit_RightTopMiddle](audiochannelbitmap/bit_righttopmiddle.md): The top-middle right channel.
- [bit_RightTopRear](audiochannelbitmap/bit_righttoprear.md): The top-rear right channel.
- [bit_TopBackRight](audiochannelbitmap/bit_topbackright.md): The top-back right channel.
- [bit_VerticalHeightRight](audiochannelbitmap/bit_verticalheightright.md): The vertical height right channel.

### Low-Frequency Effects

- [bit_LFEScreen](audiochannelbitmap/bit_lfescreen.md): The Low Frequency Effects (LFE) screen channel.

### Initializers

- [init(rawValue:)](audiochannelbitmap/init%28rawvalue_%29.md): Creates an audio channel bitmap.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [Audio Channel Layout Tags](audio-channel-layout-tags.md): The identifiers that represent audio channel layouts.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

# AudioChannelBitmap (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The supported channel bitmaps to use when defining channel layouts.

## Declaration

```objectivec
enum AudioChannelBitmap : UInt32;
```

## Topics

### Left

- [kAudioChannelBit_Left](audiochannelbitmap/bit_left.md): The left channel.
- [kAudioChannelBit_LeftCenter](audiochannelbitmap/bit_leftcenter.md): The left center channel.
- [kAudioChannelBit_LeftSurround](audiochannelbitmap/bit_leftsurround.md): The left surround channel.
- [kAudioChannelBit_LeftSurroundDirect](audiochannelbitmap/bit_leftsurrounddirect.md): The left surround direct channel.
- [kAudioChannelBit_LeftTopFront](audiochannelbitmap/bit_lefttopfront.md): The left-top front channel.
- [kAudioChannelBit_LeftTopMiddle](audiochannelbitmap/bit_lefttopmiddle.md): The left-top middle channel.
- [kAudioChannelBit_LeftTopRear](audiochannelbitmap/bit_lefttoprear.md): The left-top rear channel.
- [kAudioChannelBit_TopBackLeft](audiochannelbitmap/bit_topbackleft.md): The top-back left channel.
- [kAudioChannelBit_VerticalHeightLeft](audiochannelbitmap/bit_verticalheightleft.md): The vertical height left channel.

### Center

- [kAudioChannelBit_Center](audiochannelbitmap/bit_center.md): The center channel.
- [kAudioChannelBit_CenterSurround](audiochannelbitmap/bit_centersurround.md): The center surround channel.
- [kAudioChannelBit_CenterTopFront](audiochannelbitmap/bit_centertopfront.md): The top-front center channel.
- [kAudioChannelBit_CenterTopMiddle](audiochannelbitmap/bit_centertopmiddle.md): The top-middle center channel.
- [kAudioChannelBit_CenterTopRear](audiochannelbitmap/bit_centertoprear.md): The top-right center channel.
- [kAudioChannelBit_TopBackCenter](audiochannelbitmap/bit_topbackcenter.md): The top-back center channel.
- [kAudioChannelBit_TopCenterSurround](audiochannelbitmap/bit_topcentersurround.md): The top center surround channel.
- [kAudioChannelBit_VerticalHeightCenter](audiochannelbitmap/bit_verticalheightcenter.md): The vertical height center channel.

### Right

- [kAudioChannelBit_Right](audiochannelbitmap/bit_right.md): The right channel.
- [kAudioChannelBit_RightCenter](audiochannelbitmap/bit_rightcenter.md): The right center channel.
- [kAudioChannelBit_RightSurround](audiochannelbitmap/bit_rightsurround.md): The rIght surround channel.
- [kAudioChannelBit_RightSurroundDirect](audiochannelbitmap/bit_rightsurrounddirect.md): The right surround direct channel.
- [kAudioChannelBit_RightTopFront](audiochannelbitmap/bit_righttopfront.md): The top-front front channel.
- [kAudioChannelBit_RightTopMiddle](audiochannelbitmap/bit_righttopmiddle.md): The top-middle right channel.
- [kAudioChannelBit_RightTopRear](audiochannelbitmap/bit_righttoprear.md): The top-rear right channel.
- [kAudioChannelBit_TopBackRight](audiochannelbitmap/bit_topbackright.md): The top-back right channel.
- [kAudioChannelBit_VerticalHeightRight](audiochannelbitmap/bit_verticalheightright.md): The vertical height right channel.

### Low-Frequency Effects

- [kAudioChannelBit_LFEScreen](audiochannelbitmap/bit_lfescreen.md): The Low Frequency Effects (LFE) screen channel.

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.
