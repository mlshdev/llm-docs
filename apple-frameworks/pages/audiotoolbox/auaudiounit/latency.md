> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/latency](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/latency)

# latency (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s processing latency, in seconds.

## Declaration

```swift
var latency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the delay between when an impulse arrives in the input stream vs. output stream. This should reflect the delay due to signal processing (e.g. FFTs), not as an effect (e.g. reverberation).

Note that a latency that varies with parameter settings, including bypass, is generally not useful to hosts. A host is usually only prepared to add delays before starting to render and those delays need to be fixed. A variable delay would introduce artifacts even if the host could track it. If an algorithm has a variable latency, it should be adjusted upwards to some fixed latency within the audio unit. If for some reason this is not possible, then latency could be regarded as an unavoidable consequence of the algorithm and left unreported (i.e. a value of `0`).

This version 3 property is bridged to the version 2 `kAudioUnitProperty_Latency` API.

## See Also

### Optimizing Performance

- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [isRenderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.

# latency (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s processing latency, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval latency;
```

```objectivec
@property (atomic, readonly) NSTimeInterval latency;
```

<a id="Discussion"></a>

## Discussion

This property reflects the delay between when an impulse arrives in the input stream vs. output stream. This should reflect the delay due to signal processing (e.g. FFTs), not as an effect (e.g. reverberation).

Note that a latency that varies with parameter settings, including bypass, is generally not useful to hosts. A host is usually only prepared to add delays before starting to render and those delays need to be fixed. A variable delay would introduce artifacts even if the host could track it. If an algorithm has a variable latency, it should be adjusted upwards to some fixed latency within the audio unit. If for some reason this is not possible, then latency could be regarded as an unavoidable consequence of the algorithm and left unreported (i.e. a value of `0`).

This version 3 property is bridged to the version 2 `kAudioUnitProperty_Latency` API.

## See Also

### Optimizing Performance

- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [renderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
- [osWorkgroup](osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
