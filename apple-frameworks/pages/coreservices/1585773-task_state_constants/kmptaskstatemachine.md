> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585773-task_state_constants/kmptaskstatemachine](https://developer.apple.com/documentation/coreservices/1585773-task_state_constants/kmptaskstatemachine)

# kMPTaskStateMachine

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

The task’s machine registers. The `MachineInformationPowerPC` structure in `MachineExceptions.h` defines the format of this information. Note that the MSR, ExceptKind, DSISR, and DAR registers are read-only.

## Declaration

```objectivec
kMPTaskStateMachine = 3
```
