> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioroutingarbiter/category](https://developer.apple.com/documentation/avfaudio/avaudioroutingarbiter/category)

# AVAudioRoutingArbiter.Category (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Categories that describe the general nature of your app’s audio use.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

The category provides context that helps the operating system arbitrate between Apple devices that are trying to take ownership of a Bluetooth audio route.

## Topics

### Categories

- [AVAudioRoutingArbiter.Category.playback](category/playback.md): The app plays audio.
- [AVAudioRoutingArbiter.Category.playAndRecord](category/playandrecord.md): The app plays and records audio.
- [AVAudioRoutingArbiter.Category.playAndRecordVoice](category/playandrecordvoice.md): The app uses Voice over IP (VoIP).

### Initializers

- [init(rawValue:)](category/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Participating in AirPods Automatic Switching

- [begin(category:completionHandler:)](begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [leave()](leave%28%29.md): Stops an app’s participation in audio routing arbitration.

# AVAudioRoutingArbitrationCategory (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Categories that describe the general nature of your app’s audio use.

## Declaration

```objectivec
enum AVAudioRoutingArbitrationCategory : NSInteger;
```

<a id="overview"></a>

## Overview

The category provides context that helps the operating system arbitrate between Apple devices that are trying to take ownership of a Bluetooth audio route.

## Topics

### Categories

- [AVAudioRoutingArbitrationCategoryPlayback](category/playback.md): The app plays audio.
- [AVAudioRoutingArbitrationCategoryPlayAndRecord](category/playandrecord.md): The app plays and records audio.
- [AVAudioRoutingArbitrationCategoryPlayAndRecordVoice](category/playandrecordvoice.md): The app uses Voice over IP (VoIP).

## See Also

### Participating in AirPods Automatic Switching

- [beginArbitrationWithCategory:completionHandler:](begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [leaveArbitration](leave%28%29.md): Stops an app’s participation in audio routing arbitration.
