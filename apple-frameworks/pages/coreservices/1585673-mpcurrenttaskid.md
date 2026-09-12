> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585673-mpcurrenttaskid](https://developer.apple.com/documentation/coreservices/1585673-mpcurrenttaskid)

# MPCurrentTaskID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Obtains the task ID of the currently-executing preemptive task

## Declaration

```objectivec
MPTaskID MPCurrentTaskID(void);
```

<a id="return_value"></a>

## Return Value

The task ID of the current preemptive task. See the description of the `MPTaskID` data type.

<a id="discussion"></a>

## Discussion

Returns the ID of the current preemptive task. If called from a cooperative task, this function returns an ID which is different than the ID of any preemptive task. Nonpreemptive processes may or may not have different task IDs for each application; future implementations of this API may behave differently in this regard.

Note that you can call this function from an interrupt handler.

## See Also

### Creating and Scheduling Tasks

- [MPCreateTask](1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPSetTaskType](1585695-mpsettasktype.md): Deprecated. Sets the type of the task.
- [MPExit](1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPGetNextTaskID](1508163-mpgetnexttaskid.md): Deprecated. Obtains the next task ID in the list of available tasks.
- [MPSetTaskWeight](1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTaskIsPreemptive](1585681-mptaskispreemptive.md): Deprecated. Determines whether a task is preemptively scheduled.
- [MPTerminateTask](1585769-mpterminatetask.md): Deprecated. Terminates an existing task.
- [MPYield](1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.
