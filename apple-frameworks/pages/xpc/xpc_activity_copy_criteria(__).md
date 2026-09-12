> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_copy_criteria(_:)](https://developer.apple.com/documentation/xpc/xpc_activity_copy_criteria(_:))

# xpc_activity_copy_criteria(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Returns an XPC dictionary that describes the execution criteria of an activity.

## Declaration

```swift
func xpc_activity_copy_criteria(_ activity: xpc_activity_t) -> xpc_object_t?
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` in cases where the activity has already completed, for example, when checking in to an event that finished and wasn’t rescheduled.

## See Also

### Execution criteria

- [xpc_activity_set_criteria(\_:\_:)](xpc_activity_set_criteria%28____%29.md): Modifies the execution criteria of an activity.

# xpc_activity_copy_criteria (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Returns an XPC dictionary that describes the execution criteria of an activity.

## Declaration

```objectivec
extern xpc_object_txpc_activity_copy_criteria(xpc_activity_t activity);
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` in cases where the activity has already completed, for example, when checking in to an event that finished and wasn’t rescheduled.

## See Also

### Execution criteria

- [xpc_activity_set_criteria](xpc_activity_set_criteria%28____%29.md): Modifies the execution criteria of an activity.
