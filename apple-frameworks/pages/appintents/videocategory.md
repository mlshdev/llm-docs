> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/videocategory](https://developer.apple.com/documentation/appintents/videocategory)

# VideoCategory

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS

## Declaration

```swift
enum VideoCategory
```

## Topics

### Enumeration Cases

- [VideoCategory.freeform](videocategory/freeform.md): The app supports searching for freeform video content like what may uploaded to social media platforms. This should not be used in cases of highly structured content like movies and episodic tv shows.
- [VideoCategory.movies](videocategory/movies.md): The app supports searching for structured movie content.
- [VideoCategory.tv](videocategory/tv.md): The app supports searching for structured tv content including shows, seasons, or episodes.

### Type Aliases

- [VideoCategory.Specification](videocategory/specification.md)
- [VideoCategory.UnwrappedType](videocategory/unwrappedtype.md)
- [VideoCategory.ValueType](videocategory/valuetype.md)

## Relationships

### Conforms To

- [AppEnum](appenum.md)
- [AppValue](appvalue.md)
- [CaseDisplayRepresentable](casedisplayrepresentable.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StaticDisplayRepresentable](staticdisplayrepresentable.md)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Media actions

- [AudioPlaybackIntent](audioplaybackintent.md): An App Intent that plays, pauses, or otherwise modifies audio playback state when it executes.
- [AudioRecordingIntent](audiorecordingintent.md): An app intent that starts, stops or otherwise modifies audio recording state.
- [CameraCaptureIntent](cameracaptureintent.md): Designates intent that will launch an activity that uses device’s camera to capture photos or videos. Marking your intent with this protocol makes it available as a possible action for Camera quick action.
- [PlayVideoIntent](playvideointent.md): An intent that looks for videos based on a search term, then plays the content.
