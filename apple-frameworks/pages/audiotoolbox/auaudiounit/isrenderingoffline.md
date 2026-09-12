> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/isrenderingoffline](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/isrenderingoffline)

# isRenderingOffline (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Communicates to an audio unit that it is rendering offline.

## Declaration

```swift
var isRenderingOffline: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A host should use this property when using an audio unit in a context where there are no realtime deadlines. An audio unit may respond by using a more expensive signal processing algorithm, or allowing itself to block at render time if data being generated on secondary work threads is not ready in time.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_OfflineRender` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.

# renderingOffline (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Communicates to an audio unit that it is rendering offline.

## Declaration

```objectivec
@property (nonatomic, getter=isRenderingOffline) BOOL renderingOffline;
```

```objectivec
@property (atomic, getter=isRenderingOffline) BOOL renderingOffline;
```

<a id="Discussion"></a>

## Discussion

A host should use this property when using an audio unit in a context where there are no realtime deadlines. An audio unit may respond by using a more expensive signal processing algorithm, or allowing itself to block at render time if data being generated on secondary work threads is not ready in time.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_OfflineRender` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [osWorkgroup](osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
