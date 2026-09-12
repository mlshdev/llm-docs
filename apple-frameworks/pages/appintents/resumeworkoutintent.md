> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resumeworkoutintent](https://developer.apple.com/documentation/appintents/resumeworkoutintent)

# ResumeWorkoutIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An App Intent that lets someone resume your app’s paused workout session.

## Declaration

```swift
protocol ResumeWorkoutIntent : SystemIntent
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md)

<a id="overview"></a>

## Overview

On Apple Watch Ultra, someone can resume your app’s workout by simultaneously pressing the Action button and the side button when your app has a paused workout session.

To implement the resume action, create a structure that adopts the `ResumeWorkoutIntent` protocol.

```swift
struct MyResumeWorkoutIntent: ResumeWorkoutIntent {
    static var title: LocalizedStringResource = "Resume Workout"

    func perform() async throws -> some IntentResult {
        logger.debug("*** Performing a resume intent. ***")
        await MyWorkoutManager.shared.resumeWorkout()
        return .result()
    }
}
```

This intent needs a [title](appintent/title.md) property that provides a localized description of the action, and a [perform()](appintent/perform%28%29.md) method, which the system calls when it triggers the intent.

For more information, see [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md).

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Workout support

- [StartWorkoutIntent](startworkoutintent.md): An App Intent for starting a workout.
- [PauseWorkoutIntent](pauseworkoutintent.md): An App Intent that lets someone pause your app’s current workout session.
