> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/audiocontext](https://developer.apple.com/documentation/appintents/audiocontext)

# AudioContext

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specifies the type of audio activity to associate with a suggested entity, allowing the system to surface relevant suggestions at the right moment.

## Declaration

```swift
struct AudioContext
```

## Topics

### Structures

- [AudioContext.WorkoutIntensityLevel](audiocontext/workoutintensitylevel.md): The intensity level of a workout session.

### Type Properties

- [nowPlaying](audiocontext/nowplaying.md): The Now Playing control or complication.
- [workout](audiocontext/workout.md): A workout session of any type.

### Type Methods

- [workout(activityType:)](audiocontext/workout%28activitytype_%29.md): A workout session of the given activity type.
- [workout(intensityLevel:)](audiocontext/workout%28intensitylevel_%29.md): A workout session of the given intensity level.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity relevance

- [RelevantEntities](relevantentities.md): A type you use to donate your app’s songs, albums, artists, and other media items to play during workouts.
- [AppEntityContext](appentitycontext.md): The context used to scope suggested entity donations to a specific domain.
