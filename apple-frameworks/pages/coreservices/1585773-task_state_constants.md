> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585773-task_state_constants](https://developer.apple.com/documentation/coreservices/1585773-task_state_constants)

# Task State Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specify what states you want to set or obtain when calling the `MPExtractTaskState` or `MPSetTaskState` functions.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPTaskStateRegisters](1585773-task_state_constants/kmptaskstateregisters.md): Deprecated. The task’s general-purpose (GP) registers. The `RegisterInformationPowerPC` structure in `MachineExceptions.h` defines the format of this information.
- [kMPTaskStateFPU](1585773-task_state_constants/kmptaskstatefpu.md): Deprecated. The task’s floating point registers. The `FPUInformationPowerPC` structure in `MachineExceptions.h` defines the format of this information.
- [kMPTaskStateVectors](1585773-task_state_constants/kmptaskstatevectors.md): Deprecated. The task’s vector registers. The `VectorInformationPowerPC` structure in `MachineExceptions.h` defines the format of this information.
- [kMPTaskStateMachine](1585773-task_state_constants/kmptaskstatemachine.md): Deprecated. The task’s machine registers. The `MachineInformationPowerPC` structure in `MachineExceptions.h` defines the format of this information. Note that the MSR, ExceptKind, DSISR, and DAR registers are read-only.
- [kMPTaskState32BitMemoryException](1585773-task_state_constants/kmptaskstate32bitmemoryexception.md): Deprecated.
- [kMPTaskStateTaskInfo](1585773-task_state_constants/kmptaskstatetaskinfo.md): Deprecated. Static and dynamic information about the task, as described by the data structure [MPTaskInfo](mptaskinfo.md). This task information is read-only.
