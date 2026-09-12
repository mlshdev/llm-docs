> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/latency](https://developer.apple.com/documentation/avfaudio/avaudionode/latency)

# latency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The processing latency of the node, in seconds.

## Declaration

```swift
var latency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This latency reflects the delay due to signal processing. A value of `0` indicates either no latency or an unknown latency.

## See Also

### Getting Audio Node Properties

- [withAUAudioUnit(\_:)](withauaudiounit%28__%29.md): Provides scoped access to the node’s AUAudioUnit
- [auAudioUnit](auaudiounit-1gu8g.md): Deprecated. An audio unit object that wraps or underlies the implementation’s audio unit.
- [outputPresentationLatency](outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.

# latency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The processing latency of the node, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval latency;
```

<a id="Discussion"></a>

## Discussion

This latency reflects the delay due to signal processing. A value of `0` indicates either no latency or an unknown latency.

## See Also

### Getting Audio Node Properties

- [outputPresentationLatency](outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.
