> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_set_criteria(_:_:)](https://developer.apple.com/documentation/xpc/xpc_activity_set_criteria(_:_:))

# xpc_activity_set_criteria(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Modifies the execution criteria of an activity.

## Declaration

```swift
func xpc_activity_set_criteria(_ activity: xpc_activity_t, _ criteria: xpc_object_t)
```

## See Also

### Execution criteria

- [xpc_activity_copy_criteria(\_:)](xpc_activity_copy_criteria%28__%29.md): Returns an XPC dictionary that describes the execution criteria of an activity.

# xpc_activity_set_criteria (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Modifies the execution criteria of an activity.

## Declaration

```objectivec
extern void xpc_activity_set_criteria(xpc_activity_t activity, xpc_object_t criteria);
```

## See Also

### Execution criteria

- [xpc_activity_copy_criteria](xpc_activity_copy_criteria%28__%29.md): Returns an XPC dictionary that describes the execution criteria of an activity.
