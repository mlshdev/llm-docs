> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/foregroundcontinuableintent](https://developer.apple.com/documentation/appintents/foregroundcontinuableintent)

# ForegroundContinuableIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.4+ (deprecated in 26.0) · iPadOS 16.4+ (deprecated in 26.0) · Mac Catalyst 16.4+ (deprecated in 26.0) · macOS 13.3+ (deprecated in 26.0) · tvOS 16.4+ (deprecated in 26.0) · visionOS · watchOS 9.4+ (deprecated in 26.0)

A protocol you use for app intents which begin their work with the app in the background but may request to continue in the foreground.

> Please include '.foreground(.dynamic)' in the 'supportedModes' of your app intent instead

## Declaration

```swift
protocol ForegroundContinuableIntent : AppIntent
```

<a id="overview"></a>

## Overview

This protocol is deprecated, please include `.foreground(.dynamic)` in the `supportedModes` of your app intent instead. For backward compatibility, you can provide conformance to this protocol in an extension, for example:

```swift
@available(*, deprecated)
extension OrderSoupIntent: ForegroundContinuableIntent {}
```

## Topics

### Instance Methods

- [needsToContinueInForegroundError(\_:continuation:)](foregroundcontinuableintent/needstocontinueinforegrounderror%28__continuation_%29.md): Deprecated. A method you call to ask a person to continue an intent’s action in the foreground after it encounters an error.
- [requestToContinueInForeground(\_:continuation:)](foregroundcontinuableintent/requesttocontinueinforeground%28__continuation_%29.md): Deprecated. A method you call to ask a person to continue an action in the foreground.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated types

- [AudioStartingIntent](audiostartingintent.md): Deprecated. An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.
- [LiveActivityStartingIntent](liveactivitystartingintent.md): Deprecated. An intent that starts, pauses, or otherwise modifies a Live Activity.
