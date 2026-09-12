> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplaybackmode](https://developer.apple.com/documentation/avfoundation/avmetricplaybackmode)

# AVMetricPlaybackMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants are the possible playback modes returned by the property “mode” on AVMetricPlaybackModeSwitchEvent

## Declaration

```swift
enum AVMetricPlaybackMode
```

## Topics

### Creating a playback mode

- [init(rawValue:)](avmetricplaybackmode/init%28rawvalue_%29.md)

### Playback modes

- [AVMetricPlaybackMode.local](avmetricplaybackmode/local.md): Indicates that playback is local.
- [AVMetricPlaybackMode.airPlayVideo](avmetricplaybackmode/airplayvideo.md): Indicates that playback is via AirPlay Video.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback mode

- [AVMetricPlaybackModeSwitchEvent](avmetricplaybackmodeswitchevent.md): Represents a change in playback state, entering one of AVMetricPlaybackMode

# AVMetricPlaybackMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants are the possible playback modes returned by the property “mode” on AVMetricPlaybackModeSwitchEvent

## Declaration

```objectivec
enum AVMetricPlaybackMode : NSInteger;
```

## Topics

### Playback modes

- [AVMetricPlaybackModeLocal](avmetricplaybackmode/local.md): Indicates that playback is local.
- [AVMetricPlaybackModeAirPlayVideo](avmetricplaybackmode/airplayvideo.md): Indicates that playback is via AirPlay Video.

## See Also

### Playback mode

- [AVMetricPlaybackModeSwitchEvent](avmetricplaybackmodeswitchevent.md): Represents a change in playback state, entering one of AVMetricPlaybackMode
