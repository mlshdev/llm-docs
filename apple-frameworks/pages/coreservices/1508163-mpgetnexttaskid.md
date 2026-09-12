> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1508163-mpgetnexttaskid](https://developer.apple.com/documentation/coreservices/1508163-mpgetnexttaskid)

# MPGetNextTaskID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Obtains the next task ID in the list of available tasks.

## Declaration

```objectivec
OSStatus MPGetNextTaskID(MPProcessID owningProcessID, MPTaskID *taskID);
```

## Parameters

- `owningProcessID`: The ID of the process (typically the application) that owns the tasks. This ID is the same as the process ID handled by the Code Fragment Manager.
- `taskID`: On return, `taskID` points to ID of the next task in the list of tasks.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

By iterating on this function, you can obtain the IDs of all the tasks in a given process. These tasks may be running, ready, or blocked. Generally you would only use this function in diagnostic programs.

## See Also

### Creating and Scheduling Tasks

- [MPCreateTask](1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPCurrentTaskID](1585673-mpcurrenttaskid.md): Deprecated. Obtains the task ID of the currently-executing preemptive task
- [MPSetTaskType](1585695-mpsettasktype.md): Deprecated. Sets the type of the task.
- [MPExit](1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPSetTaskWeight](1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTaskIsPreemptive](1585681-mptaskispreemptive.md): Deprecated. Determines whether a task is preemptively scheduled.
- [MPTerminateTask](1585769-mpterminatetask.md): Deprecated. Terminates an existing task.
- [MPYield](1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.
