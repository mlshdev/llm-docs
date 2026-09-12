> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/pauseworkoutintent](https://developer.apple.com/documentation/appintents/pauseworkoutintent)

# PauseWorkoutIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An App Intent that lets someone pause your app’s current workout session.

## Declaration

```swift
protocol PauseWorkoutIntent : SystemIntent
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md)

<a id="overview"></a>

## Overview

On Apple Watch Ultra, someone can pause your workout by simultaneously pressing the Action button and the side button while your app is running a workout session.

To implement the pause action, create a structure that adopts the `PauseWorkoutIntent` protocol.

```swift
struct MyPauseWorkoutIntent: PauseWorkoutIntent {
   static var title: LocalizedStringResource = "Pause Workout"

   func perform() async throws -> some IntentResult {
       logger.debug("*** Performing a pause intent. ***")
       await MyWorkoutManager.shared.pauseWorkout()
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
- [ResumeWorkoutIntent](resumeworkoutintent.md): An App Intent that lets someone resume your app’s paused workout session.
