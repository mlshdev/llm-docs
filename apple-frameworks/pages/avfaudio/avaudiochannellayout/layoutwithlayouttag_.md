> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout/layoutwithlayouttag:](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/layoutwithlayouttag:)

# layoutWithLayoutTag:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from an audio channel layout tag.

## Declaration

```objectivec
+ (instancetype) layoutWithLayoutTag:(AudioChannelLayoutTag) layoutTag;
```

## Parameters

- `layoutTag`: The audio channel layout tag.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object.

<a id="Discussion"></a>

## Discussion

If the provided audio channel layout object’s tag is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md), this initializer attempts to convert it to a more specific tag.

## See Also

### Creating an Audio Channel Layout

- [initWithLayout:](init%28layout_%29.md): Creates an audio channel layout object from an existing one.
- [layoutWithLayout:](layoutwithlayout_.md): Creates an audio channel layout object from an existing one.
- [initWithLayoutTag:](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.
