> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchgroup/leave()](https://developer.apple.com/documentation/dispatch/dispatchgroup/leave())

# leave() (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Explicitly indicates that a block in the group finished executing.

## Declaration

```swift
func leave()
```

<a id="Discussion"></a>

## Discussion

Calling this function decrements the current count of outstanding tasks in the group. Using this function (with [enter()](enter%28%29.md)) allows your application to properly manage the task reference count if it explicitly adds and removes tasks from the group by a means other than using the [dispatch_group_async](../dispatch_group_async.md) function.

A call to this function must balance a call to [enter()](enter%28%29.md). It is invalid to call it more times than [enter()](enter%28%29.md), which would result in a negative count.

## See Also

### Updating the Group Manually

- [enter()](enter%28%29.md): Explicitly indicates that a block has entered the group.

# dispatch_group_leave (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Explicitly indicates that a block in the group finished executing.

## Declaration

```objectivec
extern void dispatch_group_leave(dispatch_group_t group);
```

## Parameters

- `group`: The dispatch group to update. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

Calling this function decrements the current count of outstanding tasks in the group. Using this function (with [dispatch_group_enter](enter%28%29.md)) allows your application to properly manage the task reference count if it explicitly adds and removes tasks from the group by a means other than using the [dispatch_group_async](../dispatch_group_async.md) function.

A call to this function must balance a call to [dispatch_group_enter](enter%28%29.md). It is invalid to call it more times than [dispatch_group_enter](enter%28%29.md), which would result in a negative count.

## See Also

### Updating the Group Manually

- [dispatch_group_enter](enter%28%29.md): Explicitly indicates that a block has entered the group.
