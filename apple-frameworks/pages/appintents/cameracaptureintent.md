> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/cameracaptureintent](https://developer.apple.com/documentation/appintents/cameracaptureintent)

# CameraCaptureIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Designates intent that will launch an activity that uses device’s camera to capture photos or videos. Marking your intent with this protocol makes it available as a possible action for Camera quick action.

## Declaration

```swift
protocol CameraCaptureIntent : SystemIntent
```

## Topics

### Associated Types

- [AppContext](cameracaptureintent/appcontext-swift.associatedtype.md): Container type used for storing and retrieving app specific information that can be accessed whenever (and wherever) this intent gets run

### Type Properties

- [appContext](cameracaptureintent/appcontext-swift.type.property.md): An app context that an app can use to pass necessary information to the sandboxed capture extension. The system will retrieve this app context when necessary and inject it for use during

### Type Methods

- [updateAppContext(\_:)](cameracaptureintent/updateappcontext%28__%29.md): Whenever the in-app context for this intent changes any process containing this intent can call this method to provide updated state to the system.

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
- [PlayVideoIntent](playvideointent.md): An intent that looks for videos based on a search term, then plays the content.
- [VideoCategory](videocategory.md)
