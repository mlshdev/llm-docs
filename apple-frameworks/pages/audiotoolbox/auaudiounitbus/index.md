> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/index](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/index)

# index (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of this bus in its containing array.

## Declaration

```swift
var index: Int { get }
```

## See Also

### Bus Methods and Properties

- [setFormat(\_:)](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [isEnabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)

# index (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of this bus in its containing array.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger index;
```

```objectivec
@property (atomic, readonly) NSUInteger index;
```

## See Also

### Bus Methods and Properties

- [setFormat:error:](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [enabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)
