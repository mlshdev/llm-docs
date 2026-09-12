> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mptaskoptions](https://developer.apple.com/documentation/coreservices/mptaskoptions)

# MPTaskOptions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify optional actions when calling the `MPCreateTask` function.

## Declaration

```objectivec
typedef OptionBits MPTaskOptions;
```

## Topics

### Constants

- [kMPCreateTaskSuspendedMask](1585581-anonymous/kmpcreatetasksuspendedmask.md): Deprecated.
- [kMPCreateTaskTakesAllExceptionsMask](1585581-anonymous/kmpcreatetasktakesallexceptionsmask.md): Deprecated. The task will take all exceptions, including those normally handled by the system, such as page faults.
- [kMPCreateTaskNotDebuggableMask](1585581-anonymous/kmpcreatetasknotdebuggablemask.md): Deprecated.
- [kMPCreateTaskValidOptionsMask](1585581-anonymous/kmpcreatetaskvalidoptionsmask.md): Deprecated. Include all valid options for this task.
