> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1585643-task_run_state_constants

# Task Run State Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Indicate the state of the task when returned as part of the `MPTaskInfo` data structure.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPTaskBlocked](1585643-task_run_state_constants/kmptaskblocked.md): Deprecated. The task is blocked..
- [kMPTaskReady](1585643-task_run_state_constants/kmptaskready.md): Deprecated. The task is ready for execution.
- [kMPTaskRunning](1585643-task_run_state_constants/kmptaskrunning.md): Deprecated. The task is currently running.
