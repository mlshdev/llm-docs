> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585628-task_exception_disposal_constant](https://developer.apple.com/documentation/coreservices/1585628-task_exception_disposal_constant)

# Task Exception Disposal Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specify actions to take on an exception when passed in the `action` parameter of the `MPDisposeTaskException` function.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPTaskPropagate](1585628-task_exception_disposal_constant/kmptaskpropagate.md): Deprecated.
- [kMPTaskResumeStep](1585628-task_exception_disposal_constant/kmptaskresumestep.md): Deprecated.
- [kMPTaskResumeBranch](1585628-task_exception_disposal_constant/kmptaskresumebranch.md): Deprecated.
- [kMPTaskResumeMask](1585628-task_exception_disposal_constant/kmptaskresumemask.md): Deprecated. Resume the task.
- [kMPTaskPropagateMask](1585628-task_exception_disposal_constant/kmptaskpropagatemask.md): Deprecated. Propagate the exception to the next debugger level.
- [kMPTaskResumeStepMask](1585628-task_exception_disposal_constant/kmptaskresumestepmask.md): Deprecated. Resume the task and enable single stepping.
- [kMPTaskResumeBranchMask](1585628-task_exception_disposal_constant/kmptaskresumebranchmask.md): Deprecated. Resume the task and enable branch stepping.
