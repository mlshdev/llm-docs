> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routeselection](https://developer.apple.com/documentation/avfaudio/avaudiosession/routeselection)

# AVAudioSession.RouteSelection

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants used to define the active route selection.

## Declaration

```swift
enum RouteSelection
```

## Topics

### Constants

- [AVAudioSession.RouteSelection.none](routeselection/none.md): No route is selected.
- [AVAudioSession.RouteSelection.local](routeselection/local.md): The local device is selected.
- [AVAudioSession.RouteSelection.external](routeselection/external.md): An external device is selected.

### Initializers

- [init(rawValue:)](routeselection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preparing for long-form video playback

- [prepareRouteSelectionForPlayback(completionHandler:)](preparerouteselectionforplayback%28completionhandler_%29.md): Prepares the route selection for long-form video playback.
