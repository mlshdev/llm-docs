> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585681-mptaskispreemptive](https://developer.apple.com/documentation/coreservices/1585681-mptaskispreemptive)

# MPTaskIsPreemptive

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Determines whether a task is preemptively scheduled.

## Declaration

```objectivec
Boolean MPTaskIsPreemptive(MPTaskID taskID);
```

## Parameters

- `taskID`: The task you want to check. Pass `kMPNoID` or `kInvalidID` if you want to specify the current task.

<a id="return_value"></a>

## Return Value

If true, the task is preemptively scheduled. If false, the task is cooperatively scheduled.

<a id="discussion"></a>

## Discussion

If you have code that may be called from either cooperative or preemptive tasks, that code can call `MPTaskIsPreemptive` if its actions should differ depending on its execution environment.  

Note that you can call this function from an interrupt handler.

## See Also

### Creating and Scheduling Tasks

- [MPCreateTask](1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPCurrentTaskID](1585673-mpcurrenttaskid.md): Deprecated. Obtains the task ID of the currently-executing preemptive task
- [MPSetTaskType](1585695-mpsettasktype.md): Deprecated. Sets the type of the task.
- [MPExit](1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPGetNextTaskID](1508163-mpgetnexttaskid.md): Deprecated. Obtains the next task ID in the list of available tasks.
- [MPSetTaskWeight](1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTerminateTask](1585769-mpterminatetask.md): Deprecated. Terminates an existing task.
- [MPYield](1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.
