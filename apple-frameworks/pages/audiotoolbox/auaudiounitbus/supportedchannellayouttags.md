> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/supportedchannellayouttags](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/supportedchannellayouttags)

# supportedChannelLayoutTags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array of audio channel layout tags.

## Declaration

```swift
var supportedChannelLayoutTags: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [NSNumber](../../foundation/nsnumber.md) objects representing [AudioChannelLayoutTag](../../coreaudiotypes/audiochannellayouttag.md) values.

## See Also

### Bus Methods and Properties

- [setFormat(\_:)](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [isEnabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)

# supportedChannelLayoutTags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array of audio channel layout tags.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * supportedChannelLayoutTags;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSNumber *> * supportedChannelLayoutTags;
```

<a id="Discussion"></a>

## Discussion

The array contains [NSNumber](../../foundation/nsnumber.md) objects representing [AudioChannelLayoutTag](../../coreaudiotypes/audiochannellayouttag.md) values.

## See Also

### Bus Methods and Properties

- [setFormat:error:](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [enabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)
