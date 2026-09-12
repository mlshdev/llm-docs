> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiochannellayout/init(layout:)](https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/init(layout:))

# init(layout:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from an existing one.

## Declaration

```swift
init(layout: UnsafePointer<AudioChannelLayout>)
```

## Parameters

- `layout`: The existing audio channel layout object.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object.

<a id="Discussion"></a>

## Discussion

If the audio channel layout object’s tag is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md), this initializer attempts to convert it to a more specific tag.

## See Also

### Related Documentation

- [layout](layout.md): The underlying audio channel layout.

### Creating an Audio Channel Layout

- [init(layoutTag:)](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.

# initWithLayout: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio channel layout object from an existing one.

## Declaration

```objectivec
- (instancetype) initWithLayout:(const AudioChannelLayout *) layout;
```

## Parameters

- `layout`: The existing audio channel layout object.

<a id="return-value"></a>

## Return Value

A new `AVAudioChannelLayout` object.

<a id="Discussion"></a>

## Discussion

If the audio channel layout object’s tag is [kAudioChannelLayoutTag_UseChannelDescriptions](../../coreaudiotypes/kaudiochannellayouttag_usechanneldescriptions.md), this initializer attempts to convert it to a more specific tag.

## See Also

### Related Documentation

- [layout](layout.md): The underlying audio channel layout.

### Creating an Audio Channel Layout

- [layoutWithLayout:](layoutwithlayout_.md): Creates an audio channel layout object from an existing one.
- [initWithLayoutTag:](init%28layouttag_%29.md): Creates an audio channel layout object from a layout tag.
- [layoutWithLayoutTag:](layoutwithlayouttag_.md): Creates an audio channel layout object from an audio channel layout tag.
