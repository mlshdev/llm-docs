> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585769-mpterminatetask](https://developer.apple.com/documentation/coreservices/1585769-mpterminatetask)

# MPTerminateTask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Terminates an existing task.

## Declaration

```objectivec
OSStatus MPTerminateTask(MPTaskID task, OSStatus terminationStatus);
```

## Parameters

- `task`: The ID of the task you wish to terminate.
- `terminationStatus`: A value of type `OSStatus` indicating termination status. This value is sent to the termination status message queue you specified in [MPCreateTask](1585779-mpcreatetask.md) in place of the task function’s result code.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If the task to be terminated is already in the process of termination, `MPTerminateTask` returns `kMPInsufficientResourcesErr`. You do not need to take any additional action if this occurs.

<a id="discussion"></a>

## Discussion

You should be very careful when calling `MPTerminateTask`.  As defined, this call will asynchronously and abruptly terminate a task, potentially leaving whatever structures or resources it was operating upon in an indeterminate state.  macOS  exacerbates this problem, as MP tasks can use many more system services that are not expecting client threads to asynchronously terminate, and these services do not take the rather complicated steps necessary to protect against, or recover from, such a situation.

However, there are situations in which calling `MPTerminateTask` is useful and relatively safe.  One such situation is when your application or service is quitting and you know that the task you wish to terminate is waiting on an MP synchronization construct (queue, event, semaphore or critical region). While you could do this more cleanly by waking the task and causing it to exit on its own, doing so may not always be practical.

For example, suppose you have several service tasks performing background processing for your application. These service tasks wait on a queue, onto which the application places requests for processing.  When the task is done with a request, it notifies another queue, which the application polls. Since the main application task is placing items on the shared queue, and receiving notifications when the requests are done, it can track whether or not there are outstanding requests being processed. If all outstanding requests have, in fact, been processed, it is relatively safe to terminate a task (or all tasks) waiting on the request queue.

You should not assume that the task has completed termination when this call returns; the proper way to synchronize with task termination is to wait on the termination queue (specified in  [MPCreateTask](1585779-mpcreatetask.md) ) until a message appears. Because task termination is a multistage activity, it is possible for a preemptive task to attempt to terminate a task that is already undergoing termination. In such cases, `MPTerminateTask` returns `kMPInsufficientResourcesErr`.

Note that Multiprocessing Services resources (event groups, queues, semaphores, and critical regions) owned by a preemptive task are not released when that task terminates. If a task has a critical region locked when it terminates, the critical region remains in the locked state. Multiprocessing Services resources no longer needed should be explicitly deleted by the task that handles the termination message. All Multiprocessing Services resources created by tasks are released when their owning process (that is, the host application) terminates.

## See Also

### Creating and Scheduling Tasks

- [MPCreateTask](1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPCurrentTaskID](1585673-mpcurrenttaskid.md): Deprecated. Obtains the task ID of the currently-executing preemptive task
- [MPSetTaskType](1585695-mpsettasktype.md): Deprecated. Sets the type of the task.
- [MPExit](1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPGetNextTaskID](1508163-mpgetnexttaskid.md): Deprecated. Obtains the next task ID in the list of available tasks.
- [MPSetTaskWeight](1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTaskIsPreemptive](1585681-mptaskispreemptive.md): Deprecated. Determines whether a task is preemptively scheduled.
- [MPYield](1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.
