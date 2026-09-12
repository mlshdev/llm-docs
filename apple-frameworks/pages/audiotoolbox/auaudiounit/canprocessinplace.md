> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/canprocessinplace](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/canprocessinplace)

# canProcessInPlace (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether an audio unit can process in place.

## Declaration

```swift
var canProcessInPlace: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In-place processing is the ability for an audio unit to transform an input signal to an output signal in-place in the input buffer, without requiring a separate output buffer.

A host can express its desire to process in place by using null `mData` pointers in the output buffer list. If so, the audio unit may process in-place in the input buffers.

This version 3 property is partially bridged to the version 2 `kAudioUnitProperty_InPlaceProcessing` API. It is not settable in version 3.

## See Also

### Related Documentation

- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [isRenderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.

# canProcessInPlace (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether an audio unit can process in place.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canProcessInPlace;
```

```objectivec
@property (atomic, readonly) BOOL canProcessInPlace;
```

<a id="Discussion"></a>

## Discussion

In-place processing is the ability for an audio unit to transform an input signal to an output signal in-place in the input buffer, without requiring a separate output buffer.

A host can express its desire to process in place by using null `mData` pointers in the output buffer list. If so, the audio unit may process in-place in the input buffers.

This version 3 property is partially bridged to the version 2 `kAudioUnitProperty_InPlaceProcessing` API. It is not settable in version 3.

## See Also

### Related Documentation

- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [renderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
- [osWorkgroup](osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
