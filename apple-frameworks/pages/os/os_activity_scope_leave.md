> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_scope_leave](https://developer.apple.com/documentation/os/os_activity_scope_leave)

# os_activity_scope_leave

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Restores the current activity to a previously saved state.

## Declaration

```objectivec
extern void os_activity_scope_leave(os_activity_scope_state_t state);
```

## Parameters

- `state`: A pointer to a scope state struct that holds the execution state you want to restore.

## See Also

### Saving and Restoring Activity States

- [os_activity_scope_enter](os_activity_scope_enter.md): Switches the current activity, saving the existing execution context.
- [os_activity_scope_state_t](os_activity_scope_state_t.md): An opaque structure that contains a saved activity-execution context.
