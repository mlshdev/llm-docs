> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemtrack](https://developer.apple.com/documentation/avfoundation/avplayeritemtrack)

# AVPlayerItemTrack (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that represents the presentation state of an asset track during playback.

## Declaration

```swift
@MainActor class AVPlayerItemTrack
```

## Mentioned In

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)

## Topics

### Setting the enabled state

- [isEnabled](avplayeritemtrack/isenabled.md): A Boolean value that indicates whether the player item presents the track’s media during playback.

### Configuring video properties

- [currentVideoFrameRate](avplayeritemtrack/currentvideoframerate.md): The current frame rate of the video track as it plays.
- [videoFieldMode](avplayeritemtrack/videofieldmode.md): A mode that specifies the handling of video frames that contain multiple fields.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.

### Accessing the asset track

- [assetTrack](avplayeritemtrack/assettrack.md): An asset track that provides the media for the player item track.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.

# AVPlayerItemTrack (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that represents the presentation state of an asset track during playback.

## Declaration

```objectivec
@interface AVPlayerItemTrack : NSObject
```

## Mentioned In

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)

## Topics

### Setting the enabled state

- [enabled](avplayeritemtrack/isenabled.md): A Boolean value that indicates whether the player item presents the track’s media during playback.

### Configuring video properties

- [currentVideoFrameRate](avplayeritemtrack/currentvideoframerate.md): The current frame rate of the video track as it plays.
- [videoFieldMode](avplayeritemtrack/videofieldmode.md): A mode that specifies the handling of video frames that contain multiple fields.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.

### Accessing the asset track

- [assetTrack](avplayeritemtrack/assettrack.md): An asset track that provides the media for the player item track.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.
