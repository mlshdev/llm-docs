> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchgroup/init()](https://developer.apple.com/documentation/dispatch/dispatchgroup/init())

# init() (Swift)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new group to which you can assign block objects.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

The newly created group. In Objective-C returns `NULL` on failure.

<a id="Discussion"></a>

## Discussion

This function creates a new group with which block objects can be associated (by using the [dispatch_group_async](../dispatch_group_async.md) function). The dispatch group maintains a count of its outstanding associated tasks, incrementing the count when a new task is associated and decrementing it when a task completes. Functions such as [dispatch_group_notify](../dispatch_group_notify.md) and [dispatch_group_wait](../dispatch_group_wait.md) use that count to allow your application to determine when all tasks associated with the group have completed. At that time, your application can take any appropriate action.

# dispatch_group_create (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new group to which you can assign block objects.

## Declaration

```objectivec
extern dispatch_group_tdispatch_group_create();
```

<a id="return-value"></a>

## Return Value

The newly created group. In Objective-C returns `NULL` on failure.

<a id="Discussion"></a>

## Discussion

This function creates a new group with which block objects can be associated (by using the [dispatch_group_async](../dispatch_group_async.md) function). The dispatch group maintains a count of its outstanding associated tasks, incrementing the count when a new task is associated and decrementing it when a task completes. Functions such as [dispatch_group_notify](../dispatch_group_notify.md) and [dispatch_group_wait](../dispatch_group_wait.md) use that count to allow your application to determine when all tasks associated with the group have completed. At that time, your application can take any appropriate action.
