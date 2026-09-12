> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_scope_enter](https://developer.apple.com/documentation/os/os_activity_scope_enter)

# os_activity_scope_enter

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Switches the current activity, saving the existing execution context.

## Declaration

```objectivec
extern void os_activity_scope_enter(os_activity_t activity, os_activity_scope_state_t state);
```

## Parameters

- `activity`: An activity object.

  You can alternatively pass one of the global activity constants, such as [OS_ACTIVITY_NONE](os_activity_none.md) or [OS_ACTIVITY_CURRENT](os_activity_current.md).
- `state`: A pointer to a scope state struct in which to save the current execution context.

## Mentioned In

- [Collecting Log Messages in Activities](collecting-log-messages-in-activities.md)

<a id="Discussion"></a>

## Discussion

Allocate the struct on the stack in the function you used to call this function and call [os_activity_scope_leave](os_activity_scope_leave.md) before leaving the scope that contains that struct.

## See Also

### Saving and Restoring Activity States

- [os_activity_scope_leave](os_activity_scope_leave.md): Restores the current activity to a previously saved state.
- [os_activity_scope_state_t](os_activity_scope_state_t.md): An opaque structure that contains a saved activity-execution context.
