> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/playvideointent](https://developer.apple.com/documentation/appintents/playvideointent)

# PlayVideoIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS

An intent that looks for videos based on a search term, then plays the content.

## Declaration

```swift
protocol PlayVideoIntent : SystemIntent
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)

## Topics

### Instance Properties

- [term](playvideointent/term.md): The search term requested by the user.

### Type Properties

- [supportedCategories](playvideointent/supportedcategories.md): The list of video categories that the app supports through this intent.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Media actions

- [AudioPlaybackIntent](audioplaybackintent.md): An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.
- [AudioRecordingIntent](audiorecordingintent.md): An app intent that starts, stops or otherwise modifies audio recording state.
- [CameraCaptureIntent](cameracaptureintent.md): Designates intent that will launch an activity that uses device’s camera to capture photos or videos. Marking your intent with this protocol makes it available as a possible action for Camera quick action.
- [VideoCategory](videocategory.md)
