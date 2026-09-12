> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_scope_state_t](https://developer.apple.com/documentation/os/os_activity_scope_state_t)

# os_activity_scope_state_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An opaque structure that contains a saved activity-execution context.

## Declaration

```objectivec
typedef struct os_activity_scope_state_s * os_activity_scope_state_t;
```

## Topics

### Instance Properties

- [opaque](os_activity_scope_state_s/opaque.md): Opaque data that the system uses to store the execution state.

## See Also

### Saving and Restoring Activity States

- [os_activity_scope_enter](os_activity_scope_enter.md): Switches the current activity, saving the existing execution context.
- [os_activity_scope_leave](os_activity_scope_leave.md): Restores the current activity to a previously saved state.
