> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/init(layouttag:)

# init(layoutTag:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from a layout tag.

## Declaration

```swift
convenience init?(layoutTag: AudioChannelLayoutTag)
```

## Parameters

- `layoutTag`: The audio channel layout tag.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object, or `nil` if `layoutTag` is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md) or [kAudioChannelLayoutTag_UseChannelBitmap](../../coreaudiotypes/kaudiochannellayouttag_usechannelbitmap.md).

## See Also

### Creating an Audio Channel Layout

- [init(layout:)](init%28layout_%29.md): Creates an audio channel layout object from an existing one.

# initWithLayoutTag: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from a layout tag.

## Declaration

```objectivec
- (instancetype) initWithLayoutTag:(AudioChannelLayoutTag) layoutTag;
```

## Parameters

- `layoutTag`: The audio channel layout tag.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object, or `nil` if `layoutTag` is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md) or [kAudioChannelLayoutTag_UseChannelBitmap](../../coreaudiotypes/kaudiochannellayouttag_usechannelbitmap.md).

## See Also

### Creating an Audio Channel Layout

- [initWithLayout:](init%28layout_%29.md): Creates an audio channel layout object from an existing one.
- [layoutWithLayout:](layoutwithlayout_.md): Creates an audio channel layout object from an existing one.
- [layoutWithLayoutTag:](layoutwithlayouttag_.md): Creates an audio channel layout object from an audio channel layout tag.
