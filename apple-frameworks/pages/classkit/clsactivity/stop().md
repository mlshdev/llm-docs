> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/stop()](https://developer.apple.com/documentation/classkit/clsactivity/stop())

# stop() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Tells an activity to stop or pause recording duration and progress for a task.

## Declaration

```swift
func stop()
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)
- [Recording additional metrics about a completed task](../recording-additional-metrics-about-a-completed-task.md)

<a id="Discussion"></a>

## Discussion

If your app uses this method to pause recording, such as when the person taps Pause in a game, you can resume later with another call to [start()](start%28%29.md) on the same activity when they resume the task associated with the activity. If the person makes a new attempt at the task — for example, by starting a game level over, and your app creates a new activity with a call to [createNewActivity()](../clscontext/createnewactivity%28%29.md) — then the framework stops the old one permanently and makes it inaccessible to your app thereafter.

## See Also

### Starting and stopping an activity

- [start()](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [isStarted](isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.

# stop (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells an activity to stop or pause recording duration and progress for a task.

## Declaration

```objectivec
- (void) stop;
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)
- [Recording additional metrics about a completed task](../recording-additional-metrics-about-a-completed-task.md)

<a id="Discussion"></a>

## Discussion

If your app uses this method to pause recording, such as when the person taps Pause in a game, you can resume later with another call to [start](start%28%29.md) on the same activity when they resume the task associated with the activity. If the person makes a new attempt at the task — for example, by starting a game level over, and your app creates a new activity with a call to [createNewActivity](../clscontext/createnewactivity%28%29.md) — then the framework stops the old one permanently and makes it inaccessible to your app thereafter.

## See Also

### Starting and stopping an activity

- [start](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [started](isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.
