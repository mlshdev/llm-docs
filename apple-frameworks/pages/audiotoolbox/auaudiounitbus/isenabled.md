> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/isenabled](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/isenabled)

# isEnabled (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the bus is active.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Hosts must enable input busses before using them. This allows an audio unit to be prepared to render a large number of inputs, but avoid the work of preparing to pull inputs which are not in use.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_MakeConnection` and `kAudioUnitProperty_SetRenderCallback` APIs.

## See Also

### Bus Methods and Properties

- [setFormat(\_:)](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)

# enabled (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the bus is active.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

```objectivec
@property (atomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Hosts must enable input busses before using them. This allows an audio unit to be prepared to render a large number of inputs, but avoid the work of preparing to pull inputs which are not in use.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_MakeConnection` and `kAudioUnitProperty_SetRenderCallback` APIs.

## See Also

### Bus Methods and Properties

- [setFormat:error:](setformat%28__%29.md): Sets the bus’s audio format.
- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)
