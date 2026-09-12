> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/withauaudiounit(_:)](https://developer.apple.com/documentation/avfaudio/avaudionode/withauaudiounit(_:))

# withAUAudioUnit(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Provides scoped access to the node’s AUAudioUnit

## Declaration

```swift
func withAUAudioUnit<R, E>(_ body: (borrowing AUAudioUnit) throws(E) -> R) throws(E) -> R where E : Error
```

## Parameters

- `body`: A closure that receives the AUAudioUnit instance

<a id="return-value"></a>

## Return Value

The value returned by the closure

<a id="discussion"></a>

## Discussion

This method provides thread-safe, scoped access to the underlying AUAudioUnit. The audio unit reference is only valid within the closure and must not be retained or accessed outside of it.

> **Throws**

> Rethrows any error thrown by the closure

## See Also

### Getting Audio Node Properties

- [auAudioUnit](auaudiounit-1gu8g.md): Deprecated. An audio unit object that wraps or underlies the implementation’s audio unit.
- [latency](latency.md): The processing latency of the node, in seconds.
- [outputPresentationLatency](outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.
