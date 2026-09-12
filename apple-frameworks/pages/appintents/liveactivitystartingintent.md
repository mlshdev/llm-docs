> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/liveactivitystartingintent](https://developer.apple.com/documentation/appintents/liveactivitystartingintent)

# LiveActivityStartingIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.1+ (deprecated in 17.0) · iPadOS 16.1+ (deprecated in 17.0) · Mac Catalyst 16.1+ (deprecated in 17.0) · visionOS

An intent that starts, pauses, or otherwise modifies a Live Activity.

> Use LiveActivityIntent instead.

## Declaration

```swift
protocol LiveActivityStartingIntent : SystemIntent
```

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Deprecated types

- [AudioStartingIntent](audiostartingintent.md): Deprecated. An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.
- [ForegroundContinuableIntent](foregroundcontinuableintent.md): Deprecated. A protocol you use for app intents which begin their work with the app in the background but may request to continue in the foreground.
