> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/currentactivity](https://developer.apple.com/documentation/classkit/clscontext/currentactivity)

# currentActivity (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The activity available for recording progress.

## Declaration

```swift
var currentActivity: CLSActivity? { get }
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

You add an activity to a context by calling the [createNewActivity()](createnewactivity%28%29.md) method when a person makes a new attempt at a task. You then use the context’s [currentActivity](currentactivity.md) property to access the newly created activity. If the context has an existing activity from a previous attempt, it ceases to be available to your app as a result of creating a new one. However, the network still retains its data for reporting purposes.

Don’t store a reference to the current activity. Always use the [currentActivity](currentactivity.md) property to get it. The object returned to you might change from time to time because of network synchronization, even when the underlying task is the same.

## See Also

### Creating activities

- [createNewActivity()](createnewactivity%28%29.md): Creates and returns a new activity instance for the context.

# currentActivity (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The activity available for recording progress.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLSActivity * currentActivity;
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

You add an activity to a context by calling the [createNewActivity](createnewactivity%28%29.md) method when a person makes a new attempt at a task. You then use the context’s [currentActivity](currentactivity.md) property to access the newly created activity. If the context has an existing activity from a previous attempt, it ceases to be available to your app as a result of creating a new one. However, the network still retains its data for reporting purposes.

Don’t store a reference to the current activity. Always use the [currentActivity](currentactivity.md) property to get it. The object returned to you might change from time to time because of network synchronization, even when the underlying task is the same.

## See Also

### Creating activities

- [createNewActivity](createnewactivity%28%29.md): Creates and returns a new activity instance for the context.
