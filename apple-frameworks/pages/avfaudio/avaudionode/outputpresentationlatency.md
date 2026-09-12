> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/outputpresentationlatency](https://developer.apple.com/documentation/avfaudio/avaudionode/outputpresentationlatency)

# outputPresentationLatency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum render pipeline latency downstream of the node, in seconds.

## Declaration

```swift
var outputPresentationLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This latency describes the maximum time it takes to present the audio at the output of a node.

## See Also

### Getting Audio Node Properties

- [withAUAudioUnit(\_:)](withauaudiounit%28__%29.md): Provides scoped access to the node’s AUAudioUnit
- [auAudioUnit](auaudiounit-1gu8g.md): Deprecated. An audio unit object that wraps or underlies the implementation’s audio unit.
- [latency](latency.md): The processing latency of the node, in seconds.

# outputPresentationLatency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum render pipeline latency downstream of the node, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval outputPresentationLatency;
```

<a id="Discussion"></a>

## Discussion

This latency describes the maximum time it takes to present the audio at the output of a node.

## See Also

### Getting Audio Node Properties

- [latency](latency.md): The processing latency of the node, in seconds.
