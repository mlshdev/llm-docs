> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/audioplaybackintent](https://developer.apple.com/documentation/appintents/audioplaybackintent)

# AudioPlaybackIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.

## Declaration

```swift
protocol AudioPlaybackIntent : SystemIntent
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

### Media actions

- [AudioRecordingIntent](audiorecordingintent.md): An app intent that starts, stops or otherwise modifies audio recording state.
- [CameraCaptureIntent](cameracaptureintent.md): Designates intent that will launch an activity that uses device’s camera to capture photos or videos. Marking your intent with this protocol makes it available as a possible action for Camera quick action.
- [PlayVideoIntent](playvideointent.md): An intent that looks for videos based on a search term, then plays the content.
- [VideoCategory](videocategory.md)
