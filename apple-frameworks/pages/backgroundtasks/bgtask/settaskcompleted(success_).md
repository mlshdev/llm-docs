> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtask/settaskcompleted(success:)](https://developer.apple.com/documentation/backgroundtasks/bgtask/settaskcompleted(success:))

# setTaskCompleted(success:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Informs the background task scheduler that the task is complete.

## Declaration

```swift
func setTaskCompleted(success: Bool)
```

## Parameters

- `success`: A `Boolean` indicating if the task completed successfully or not.

## Mentioned In

- [Choosing Background Strategies for Your App](../choosing-background-strategies-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Not calling [setTaskCompleted(success:)](settaskcompleted%28success_%29.md) before the time for the task expires may result in the system killing your app.

You can reschedule an unsuccessful required task.

> **Important**

> If you don’t set an expiration handler, the system will mark your task as complete and unsuccessful instead of sending a warning.

## See Also

### Configuring a Task

- [expirationHandler](expirationhandler.md): A handler called shortly before the task’s background time expires.

# setTaskCompletedWithSuccess: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Informs the background task scheduler that the task is complete.

## Declaration

```objectivec
- (void) setTaskCompletedWithSuccess:(BOOL) success;
```

## Parameters

- `success`: A `Boolean` indicating if the task completed successfully or not.

## Mentioned In

- [Choosing Background Strategies for Your App](../choosing-background-strategies-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Not calling [setTaskCompletedWithSuccess:](settaskcompleted%28success_%29.md) before the time for the task expires may result in the system killing your app.

You can reschedule an unsuccessful required task.

> **Important**

> If you don’t set an expiration handler, the system will mark your task as complete and unsuccessful instead of sending a warning.

## See Also

### Configuring a Task

- [expirationHandler](expirationhandler.md): A handler called shortly before the task’s background time expires.
