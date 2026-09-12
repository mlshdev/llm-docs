> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/auaudiounit-1gu8g](https://developer.apple.com/documentation/avfaudio/avaudionode/auaudiounit-1gu8g)

# auAudioUnit

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An audio unit object that wraps or underlies the implementation’s audio unit.

> Deprecated in favor of withAUAudioUnit

## Declaration

```swift
@export(implementation) var auAudioUnit: AUAudioUnit { get }
```

<a id="Discussion"></a>

## Discussion

This provides an [AUAudioUnit](../../audiotoolbox/auaudiounit.md) that either wraps or underlies the implementation’s audio unit, depending on how the app packages the audio unit. Apps interact with this to control custom properties, select presets, and change parameters.

Don’t perform operations directly on the audio unit that may conflict with the engine’s state, which includes changing the initialization state, stream formats, channel layouts, or connections to other audio units.

## See Also

### Getting Audio Node Properties

- [withAUAudioUnit(\_:)](withauaudiounit%28__%29.md): Provides scoped access to the node’s AUAudioUnit
- [latency](latency.md): The processing latency of the node, in seconds.
- [outputPresentationLatency](outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.
