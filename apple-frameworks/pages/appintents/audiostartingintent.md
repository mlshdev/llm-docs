> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/audiostartingintent](https://developer.apple.com/documentation/appintents/audiostartingintent)

# AudioStartingIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 10.0)

An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.

> Please use AudioPlaybackIntent instead.

## Declaration

```swift
protocol AudioStartingIntent : SystemIntent
```

<a id="overview"></a>

## Overview

Adopt this protocol to indicate to the system that your App Intent plays audio. The system can then avoid dialogue or other experiences that might interrupt that audio.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Deprecated types

- [ForegroundContinuableIntent](foregroundcontinuableintent.md): Deprecated. A protocol you use for app intents which begin their work with the app in the background but may request to continue in the foreground.
- [LiveActivityStartingIntent](liveactivitystartingintent.md): Deprecated. An intent that starts, pauses, or otherwise modifies a Live Activity.
