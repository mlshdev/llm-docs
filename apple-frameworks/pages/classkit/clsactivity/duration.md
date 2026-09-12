> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/duration](https://developer.apple.com/documentation/classkit/clsactivity/duration)

# duration (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The cumulative time in seconds that an activity has been active.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

When you create a new activity to represent a new attempt at a task by calling the [createNewActivity()](../clscontext/createnewactivity%28%29.md) method, the duration initializes to zero. After calling the [start()](start%28%29.md) method, it begins counting seconds. When you call the [stop()](stop%28%29.md) method, the duration counter stops. It resumes counting (without resetting) if you make a new call to the [start()](start%28%29.md) method, enabling you to effectively pause an activity. However, when you create a new activity, the duration of the previous activity stops permanently and is no longer accessible to your app.

## See Also

### Starting and stopping an activity

- [start()](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop()](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [isStarted](isstarted.md): A Boolean that indicates whether an activity is running.

# duration (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The cumulative time in seconds that an activity has been active.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

When you create a new activity to represent a new attempt at a task by calling the [createNewActivity](../clscontext/createnewactivity%28%29.md) method, the duration initializes to zero. After calling the [start](start%28%29.md) method, it begins counting seconds. When you call the [stop](stop%28%29.md) method, the duration counter stops. It resumes counting (without resetting) if you make a new call to the [start](start%28%29.md) method, enabling you to effectively pause an activity. However, when you create a new activity, the duration of the previous activity stops permanently and is no longer accessible to your app.

## See Also

### Starting and stopping an activity

- [start](start%28%29.md): Tells an activity to start recording duration and progress for a task.
- [stop](stop%28%29.md): Tells an activity to stop or pause recording duration and progress for a task.
- [started](isstarted.md): A Boolean that indicates whether an activity is running.
