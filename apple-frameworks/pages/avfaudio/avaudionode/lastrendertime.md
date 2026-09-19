> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudionode/lastrendertime

# lastRenderTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent render time.

## Declaration

```swift
var lastRenderTime: AVAudioTime? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the engine isn’t running or if you don’t connect the node to an input or output node.

# lastRenderTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent render time.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioTime * lastRenderTime;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the engine isn’t running or if you don’t connect the node to an input or output node.
