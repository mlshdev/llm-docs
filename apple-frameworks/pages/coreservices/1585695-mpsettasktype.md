> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585695-mpsettasktype](https://developer.apple.com/documentation/coreservices/1585695-mpsettasktype)

# MPSetTaskType

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the type of the task.

## Declaration

```objectivec
OSStatus MPSetTaskType(MPTaskID task, OSType taskType);
```

<a id="return_value"></a>

## Return Value

The `noErr` result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

This function does nothing and should not be used.

## See Also

### Creating and Scheduling Tasks

- [MPCreateTask](1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPCurrentTaskID](1585673-mpcurrenttaskid.md): Deprecated. Obtains the task ID of the currently-executing preemptive task
- [MPExit](1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPGetNextTaskID](1508163-mpgetnexttaskid.md): Deprecated. Obtains the next task ID in the list of available tasks.
- [MPSetTaskWeight](1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTaskIsPreemptive](1585681-mptaskispreemptive.md): Deprecated. Determines whether a task is preemptively scheduled.
- [MPTerminateTask](1585769-mpterminatetask.md): Deprecated. Terminates an existing task.
- [MPYield](1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.
