> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585773-task_state_constants/kmptaskstate32bitmemoryexception](https://developer.apple.com/documentation/coreservices/1585773-task_state_constants/kmptaskstate32bitmemoryexception)

# kMPTaskState32BitMemoryException

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPTaskState32BitMemoryException = 4
```

<a id="discussion"></a>

## Discussion

The task’s exception information for older 32-bit memory exceptions (that is, memory exceptions on 32-bit CPUs). The `MemoryExceptionInformation` structure in `MachineExceptions.h` defines the format of this information. This exception information is read-only.
