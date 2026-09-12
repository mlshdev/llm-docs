> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputlatency](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputlatency)

# outputLatency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The latency for audio output, in seconds.

## Declaration

```swift
var outputLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Using an AirPlay-enabled device for your audio content can result in a 2-second delay. Check for this delay in game content.

## See Also

### Inspecting latency

- [inputLatency](inputlatency.md): The latency for audio input, in seconds.

# outputLatency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The latency for audio output, in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval outputLatency;
```

<a id="Discussion"></a>

## Discussion

Using an AirPlay-enabled device for your audio content can result in a 2-second delay. Check for this delay in game content.

## See Also

### Inspecting latency

- [inputLatency](inputlatency.md): The latency for audio input, in seconds.
