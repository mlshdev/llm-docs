> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout/layoutwithlayout:](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/layoutwithlayout:)

# layoutWithLayout:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from an existing one.

## Declaration

```objectivec
+ (instancetype) layoutWithLayout:(const AudioChannelLayout *) layout;
```

## Parameters

- `layout`: The existing audio channel layout object.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object.

<a id="Discussion"></a>

## Discussion

If the layout’s tag is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md), the method attempts to convert it to a more specific tag.

## See Also

### Creating an Audio Channel Layout

- [initWithLayout:](init%28layout_%29.md): Creates an audio channel layout object from an existing one.
- [initWithLayoutTag:](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.
- [layoutWithLayoutTag:](layoutwithlayouttag_.md): Creates an audio channel layout object from an audio channel layout tag.
