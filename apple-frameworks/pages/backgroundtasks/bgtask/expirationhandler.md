> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtask/expirationhandler](https://developer.apple.com/documentation/backgroundtasks/bgtask/expirationhandler)

# expirationHandler (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A handler called shortly before the task’s background time expires.

## Declaration

```swift
var expirationHandler: (() -> Void)? { get set }
```

## Parameters

- `expirationHandler`: The expiration handler takes no arguments and has no return value. Use the handler to cancel any ongoing work and to do any required cleanup in as short a time as possible.

  The handler may be called before the background process uses the full amount of its allocated time.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Discussion"></a>

## Discussion

The time allocated by the system for expiration handlers doesn’t vary with the number of background tasks. All expiration handlers must complete before the allocated time.

Not setting an expiration handler results in the system marking your task as complete and unsuccessful instead of sending a warning.

The manager sets the value `expirationHandler` to `nil` after the handler completes.

## See Also

### Configuring a Task

- [setTaskCompleted(success:)](settaskcompleted%28success_%29.md): Informs the background task scheduler that the task is complete.

# expirationHandler (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A handler called shortly before the task’s background time expires.

## Declaration

```objectivec
@property (strong, nullable) void (^expirationHandler)();
```

## Parameters

- `expirationHandler`: The expiration handler takes no arguments and has no return value. Use the handler to cancel any ongoing work and to do any required cleanup in as short a time as possible.

  The handler may be called before the background process uses the full amount of its allocated time.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Discussion"></a>

## Discussion

The time allocated by the system for expiration handlers doesn’t vary with the number of background tasks. All expiration handlers must complete before the allocated time.

Not setting an expiration handler results in the system marking your task as complete and unsuccessful instead of sending a warning.

The manager sets the value `expirationHandler` to `nil` after the handler completes.

## See Also

### Configuring a Task

- [setTaskCompletedWithSuccess:](settaskcompleted%28success_%29.md): Informs the background task scheduler that the task is complete.
