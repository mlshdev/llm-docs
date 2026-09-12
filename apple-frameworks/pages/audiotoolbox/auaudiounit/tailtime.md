> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/tailtime](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/tailtime)

# tailTime (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s tail time, in seconds.

## Declaration

```swift
var tailTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the time interval between when the input stream ends or otherwise transitions to silence, and when the output stream becomes silent. This should also reflect the duration of an effect (e.g. reverberation).

This version 3 property is bridged to the version 2 `kAudioUnitProperty_TailTime` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [isRenderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.

# tailTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s tail time, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval tailTime;
```

```objectivec
@property (atomic, readonly) NSTimeInterval tailTime;
```

<a id="Discussion"></a>

## Discussion

This property reflects the time interval between when the input stream ends or otherwise transitions to silence, and when the output stream becomes silent. This should also reflect the duration of an effect (e.g. reverberation).

This version 3 property is bridged to the version 2 `kAudioUnitProperty_TailTime` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [renderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
- [osWorkgroup](osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
