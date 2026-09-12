> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/renderquality](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/renderquality)

# renderQuality (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Provides a trade-off between rendering quality and CPU load.

## Declaration

```swift
var renderQuality: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The range of valid values is 0 to 127.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_RenderQuality` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [isRenderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.

# renderQuality (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Provides a trade-off between rendering quality and CPU load.

## Declaration

```objectivec
@property (nonatomic) NSInteger renderQuality;
```

```objectivec
@property (atomic) NSInteger renderQuality;
```

<a id="Discussion"></a>

## Discussion

The range of valid values is 0 to 127.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_RenderQuality` API.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [renderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
- [osWorkgroup](osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
