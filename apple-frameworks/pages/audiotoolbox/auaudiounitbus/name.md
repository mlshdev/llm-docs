> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/name](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/name)

# name (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A name for the bus.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The bus name can be set by the host.

## See Also

### Bus Methods and Properties

- [setFormat(\_:)](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [isEnabled](isenabled.md): Determines whether the bus is active.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)

# name (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A name for the bus.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

```objectivec
@property (atomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The bus name can be set by the host.

## See Also

### Bus Methods and Properties

- [setFormat:error:](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [enabled](isenabled.md): Determines whether the bus is active.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)
