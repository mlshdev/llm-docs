> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/isstarted](https://developer.apple.com/documentation/classkit/clsactivity/isstarted)

# isStarted (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A Boolean that indicates whether an activity is running.

## Declaration

```swift
var isStarted: Bool { get }
```

## See Also

### Starting and stopping an activity

- [start()](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop()](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.

# started (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean that indicates whether an activity is running.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isStarted) BOOL started;
```

## See Also

### Starting and stopping an activity

- [start](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [duration](duration.md): The cumulative time in seconds that an activity has been active.
