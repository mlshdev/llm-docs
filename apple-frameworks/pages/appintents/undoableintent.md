> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/undoableintent](https://developer.apple.com/documentation/appintents/undoableintent)

# UndoableIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An interface you use to register undoable actions in your app intent code.

## Declaration

```swift
protocol UndoableIntent : SystemIntent
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)

<a id="overview"></a>

## Overview

Add support for this protocol if your app intent performs a task that someone might want to undo from your app’s interface. This protocol provides access to an instance of the [UndoManager](../foundation/undomanager.md) type suitable for use in your app intent’s code. You can use this undo manager from either your app or an app extension you use to run app intents.

For more information about adding undo support to your code, see the [UndoManager](../foundation/undomanager.md) type.

## Topics

### Getting the undo manager

- [undoManager](undoableintent/undomanager.md): The undo manager you use to register undo actions for your app intents.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Add-on behaviors

- [CancellableIntent](cancellableintent.md): An interface to support the graceful cancellation of your app intent’s task.
- [LongRunningIntent](longrunningintent.md): An interface you use to extend the background execution time of an app intent that performs a long-running task.
- [PredictableIntent](predictableintent.md): An interface that indicates the system can suggest the intent as a potential action to run.
- [IntentPrediction](intentprediction.md): A prediction for an app intent that the system might display to someone when it’s relevant.
