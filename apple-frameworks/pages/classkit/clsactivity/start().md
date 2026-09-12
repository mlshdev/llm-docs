> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/start()](https://developer.apple.com/documentation/classkit/clsactivity/start())

# start() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Tells an activity to start recording duration and progress for a task.

## Declaration

```swift
func start()
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 11.4, you can start more than one activity at a time, each in its own context. This allows you to nest activities, running a given context and all its ancestors simultaneously, thus measuring progress at multiple levels of context hierarchy concurrently.

## See Also

### Starting and stopping an activity

- [stop()](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [isStarted](isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.

# start (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells an activity to start recording duration and progress for a task.

## Declaration

```objectivec
- (void) start;
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 11.4, you can start more than one activity at a time, each in its own context. This allows you to nest activities, running a given context and all its ancestors simultaneously, thus measuring progress at multiple levels of context hierarchy concurrently.

## See Also

### Starting and stopping an activity

- [stop](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [started](isstarted.md): A Boolean that indicates whether an activity is running.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.
