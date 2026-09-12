> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity](https://developer.apple.com/documentation/classkit/clsactivity)

# CLSActivity (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A representation of user interaction with a context.

## Declaration

```swift
class CLSActivity
```

## Mentioned In

- [Recording student progress](recording-student-progress.md)

<a id="overview"></a>

## Overview

An activity represents a student’s attempt to complete the task corresponding to a [CLSContext](clscontext.md) instance. For example, if a context represents a quiz, the associated activity represents the student’s attempt to take the quiz. As such, an activity is always associated with a context. You never initialize an activity in isolation or store a reference to it. Rather, you ask a context to create the activity and retrieve it from the context.

<a id="Starting-and-Stopping-Activities"></a>

### Starting and Stopping Activities

You start the activity with a call to the [start()](clsactivity/start%28%29.md) method when the user begins the task, and stop it with a call to the [stop()](clsactivity/stop%28%29.md) method when the user finishes. You can also use the [stop()](clsactivity/stop%28%29.md) method to stop it temporarily if the user pauses the task, in which case you can start it again later with another call to [start()](clsactivity/start%28%29.md) when the user resumes. The activity keeps track of the total time spent in the running state, which you can read via the [duration](clsactivity/duration.md) property.

Whether you implement activity pausing depends on how the parts of your app work. For example, you might pause a game activity when the user presses the pause button to reflect that the user has stepped away from the activity, but is likely to return soon to complete the task. On the other hand, you might not provide a way to pause a quiz activity because you require that it be completed without interruption, once started. If you do pause, you can start and stop an activity as many times as you want, but when you create a new activity (representing a new attempt at a task), you can no longer access the older activity from your app.

<a id="Recording-Progress"></a>

### Recording Progress

You can also assign [progress](clsactivity/progress.md) to an activity. How you define progress depends on the task. For example, you can record progress through a quiz as a fraction of questions answered, or progress through a game level as a fraction of obstacles overcome.

To record additional metrics, you attach [CLSActivityItem](clsactivityitem.md) instances to an activity. For example, you can add both a score and a count of hints used to a quiz activity. To feature one of these items prominently, make it the [primaryActivityItem](clsactivity/primaryactivityitem.md).

## Topics

### Starting and stopping an activity

- [start()](clsactivity/start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop()](clsactivity/stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [isStarted](clsactivity/isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](clsactivity/duration.md): The cumulative time in seconds that an activity has been active.

### Measuring progress

- [progress](clsactivity/progress.md): A measure of progress through the task, given as a fraction in the range \[0, 1\].
- [addProgressRange(fromStart:toEnd:)](clsactivity/addprogressrange%28fromstart_toend_%29.md): Adds a progress range to a given activity.

### Managing activity items

- [addAdditionalActivityItem(\_:)](clsactivity/addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](clsactivity/primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [additionalActivityItems](clsactivity/additionalactivityitems.md): The list of activity items associated with an activity.
- [removeAllActivityItems()](clsactivity/removeallactivityitems%28%29.md): Deletes all activity items associated with the current activity.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Activities

- [Recording student progress](recording-student-progress.md): Create an activity to record student progress through an assignment.

# CLSActivity (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A representation of user interaction with a context.

## Declaration

```objectivec
@interface CLSActivity : CLSObject
```

## Mentioned In

- [Recording student progress](recording-student-progress.md)

<a id="overview"></a>

## Overview

An activity represents a student’s attempt to complete the task corresponding to a [CLSContext](clscontext.md) instance. For example, if a context represents a quiz, the associated activity represents the student’s attempt to take the quiz. As such, an activity is always associated with a context. You never initialize an activity in isolation or store a reference to it. Rather, you ask a context to create the activity and retrieve it from the context.

<a id="Starting-and-Stopping-Activities"></a>

### Starting and Stopping Activities

You start the activity with a call to the [start](clsactivity/start%28%29.md) method when the user begins the task, and stop it with a call to the [stop](clsactivity/stop%28%29.md) method when the user finishes. You can also use the [stop](clsactivity/stop%28%29.md) method to stop it temporarily if the user pauses the task, in which case you can start it again later with another call to [start](clsactivity/start%28%29.md) when the user resumes. The activity keeps track of the total time spent in the running state, which you can read via the [duration](clsactivity/duration.md) property.

Whether you implement activity pausing depends on how the parts of your app work. For example, you might pause a game activity when the user presses the pause button to reflect that the user has stepped away from the activity, but is likely to return soon to complete the task. On the other hand, you might not provide a way to pause a quiz activity because you require that it be completed without interruption, once started. If you do pause, you can start and stop an activity as many times as you want, but when you create a new activity (representing a new attempt at a task), you can no longer access the older activity from your app.

<a id="Recording-Progress"></a>

### Recording Progress

You can also assign [progress](clsactivity/progress.md) to an activity. How you define progress depends on the task. For example, you can record progress through a quiz as a fraction of questions answered, or progress through a game level as a fraction of obstacles overcome.

To record additional metrics, you attach [CLSActivityItem](clsactivityitem.md) instances to an activity. For example, you can add both a score and a count of hints used to a quiz activity. To feature one of these items prominently, make it the [primaryActivityItem](clsactivity/primaryactivityitem.md).

## Topics

### Starting and stopping an activity

- [start](clsactivity/start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop](clsactivity/stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [started](clsactivity/isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](clsactivity/duration.md): The cumulative time in seconds that an activity has been active.

### Measuring progress

- [progress](clsactivity/progress.md): A measure of progress through the task, given as a fraction in the range \[0, 1\].
- [addProgressRangeFromStart:toEnd:](clsactivity/addprogressrange%28fromstart_toend_%29.md): Adds a progress range to a given activity.

### Managing activity items

- [addAdditionalActivityItem:](clsactivity/addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](clsactivity/primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [additionalActivityItems](clsactivity/additionalactivityitems.md): The list of activity items associated with an activity.
- [removeAllActivityItems](clsactivity/removeallactivityitems%28%29.md): Deletes all activity items associated with the current activity.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

## See Also

### Activities

- [Recording student progress](recording-student-progress.md): Create an activity to record student progress through an assignment.
