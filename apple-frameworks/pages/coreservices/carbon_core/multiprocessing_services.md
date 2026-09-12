> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/multiprocessing_services](https://developer.apple.com/documentation/coreservices/carbon_core/multiprocessing_services)

# Multiprocessing Services (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Support multitasking in your app.

> In macOS 10.8 and later, use Grand Central Dispatch (GCD) or POSIX threads instead. For more information, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091), the [Dispatch](../../dispatch.md) framework reference, and [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="overview"></a>

## Overview

Multiprocessing Services is an API that lets you create preemptive tasks in your application that can run on one or more microprocessors. Unlike the cooperative threads created by the Thread Manager, Multiprocessing Services automatically divides processor time among the available tasks, so that no particular task can monopolize the system. This document is relevant to you if you want to add multitasking capability to your Mac OS applications.

In macOS, Carbon supports Multiprocessing Services with the following restrictions:

- Debugging functions are not implemented. Use the mach APIs provided by the system to implement debugging services.
- Opaque notification IDs are local to your process; they are not globally addressable across processes.
- Global memory allocation is not supported.

<a id="1674081"></a>

### Gestalt Constants

You can determine which system software calls are preemptively-safe for Multiprocessing Services by using the preemptive function attribute selectors defined in the Gestalt Manager. For more information, see [Gestalt Manager](gestalt_manager.md).

## Topics

### Result Codes

- [kMPIterationEndErr](../kmpiterationenderr.md)
- [kMPPrivilegedErr](../kmpprivilegederr.md)
- [kMPProcessCreatedErr](../kmpprocesscreatederr.md)
- [kMPProcessTerminatedErr](../kmpprocessterminatederr.md)
- [kMPTaskCreatedErr](../kmptaskcreatederr.md)
- [kMPTaskBlockedErr](../kmptaskblockederr.md): The desired task is blocked.
- [kMPTaskStoppedErr](../kmptaskstoppederr.md): The desired task is stopped.
- [kMPDeletedErr](../kmpdeletederr.md): The desired notification the function was waiting upon was deleted.
- [kMPTimeoutErr](../kmptimeouterr.md): The designated timeout interval passed before the function could take action.
- [kMPInsufficientResourcesErr](../kmpinsufficientresourceserr.md): Could not complete task due to unavailable Multiprocessing Services resources. Note that many functions return this value as a general error when the desired action could not be performed.
- [kMPInvalidIDErr](../kmpinvalididerr.md): Invalid ID value. For example, an invalid message queue ID was passed to `MPNotifyQueue`.

# Multiprocessing Services (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Support multitasking in your app.

> In macOS 10.8 and later, use Grand Central Dispatch (GCD) or POSIX threads instead. For more information, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091), the [Dispatch](../../dispatch.md) framework reference, and [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="overview"></a>

## Overview

Multiprocessing Services is an API that lets you create preemptive tasks in your application that can run on one or more microprocessors. Unlike the cooperative threads created by the Thread Manager, Multiprocessing Services automatically divides processor time among the available tasks, so that no particular task can monopolize the system. This document is relevant to you if you want to add multitasking capability to your Mac OS applications.

In macOS, Carbon supports Multiprocessing Services with the following restrictions:

- Debugging functions are not implemented. Use the mach APIs provided by the system to implement debugging services.
- Opaque notification IDs are local to your process; they are not globally addressable across processes.
- Global memory allocation is not supported.

<a id="1674081"></a>

### Gestalt Constants

You can determine which system software calls are preemptively-safe for Multiprocessing Services by using the preemptive function attribute selectors defined in the Gestalt Manager. For more information, see [Gestalt Manager](gestalt_manager.md).

## Topics

### Determining Multiprocessing Services And Processor Availability

- [\_MPIsFullyInitialized](multiprocessing_services/1809315-_mpisfullyinitialized.md): Indicates whether Multiprocessing Services is available for use.
- [MPGetNextCpuID](../1508189-mpgetnextcpuid.md): Deprecated. Obtains the next CPU ID in the list of physical processors of the specified memory coherence group.
- [MPProcessors](../1585778-mpprocessors.md): Deprecated. Returns the number of processors on the host computer.
- [MPProcessorsScheduled](../1585777-mpprocessorsscheduled.md): Deprecated. Returns the number of active processors available on the host computer.

### Creating and Handling Message Queues

- [MPCreateQueue](../1585694-mpcreatequeue.md): Deprecated. Creates a message queue.
- [MPDeleteQueue](../1585571-mpdeletequeue.md): Deprecated. Deletes a message queue.
- [MPNotifyQueue](../1585699-mpnotifyqueue.md): Deprecated. Sends a message to the specified message queue.
- [MPSetQueueReserve](../1585671-mpsetqueuereserve.md): Deprecated. Reserves space for messages on a specified message queue.
- [MPWaitOnQueue](../1585762-mpwaitonqueue.md): Deprecated. Obtains a message from a specified message queue.

### Creating and Handling Semaphores

- [MPCreateSemaphore](../1585569-mpcreatesemaphore.md): Deprecated. Creates a semaphore.
- [MPDeleteSemaphore](../1585586-mpdeletesemaphore.md): Deprecated. Removes a semaphore.
- [MPSignalSemaphore](../1585713-mpsignalsemaphore.md): Deprecated. Signals a semaphore.
- [MPWaitOnSemaphore](../1585722-mpwaitonsemaphore.md): Deprecated. Waits on a semaphore

### Creating and Scheduling Tasks

- [MPCreateTask](../1585779-mpcreatetask.md): Deprecated. Creates a preemptive task.
- [MPCurrentTaskID](../1585673-mpcurrenttaskid.md): Deprecated. Obtains the task ID of the currently-executing preemptive task
- [MPSetTaskType](../1585695-mpsettasktype.md): Deprecated. Sets the type of the task.
- [MPExit](../1585705-mpexit.md): Deprecated. Allows a task to terminate itself
- [MPGetNextTaskID](../1508163-mpgetnexttaskid.md): Deprecated. Obtains the next task ID in the list of available tasks.
- [MPSetTaskWeight](../1585665-mpsettaskweight.md): Deprecated. Assigns a relative weight to a task, indicating how much processor time it should receive compared to other available tasks.
- [MPTaskIsPreemptive](../1585681-mptaskispreemptive.md): Deprecated. Determines whether a task is preemptively scheduled.
- [MPTerminateTask](../1585769-mpterminatetask.md): Deprecated. Terminates an existing task.
- [MPYield](../1585732-mpyield.md): Deprecated. Allows a task to yield the processor to another task.

### Handling Critical Regions

- [MPCreateCriticalRegion](../1585663-mpcreatecriticalregion.md): Deprecated. Creates a critical region object.
- [MPDeleteCriticalRegion](../1585704-mpdeletecriticalregion.md): Deprecated. Removes the specified critical region object.
- [MPEnterCriticalRegion](../1585622-mpentercriticalregion.md): Deprecated. Attempts to enter a critical region.
- [MPExitCriticalRegion](../1585758-mpexitcriticalregion.md): Deprecated. Exits a critical region.

### Handling Event Groups

- [MPCreateEvent](../1585702-mpcreateevent.md): Deprecated. Creates an event group.
- [MPDeleteEvent](../1585691-mpdeleteevent.md): Deprecated. Removes an event group.
- [MPSetEvent](../1585752-mpsetevent.md): Deprecated. Merges event flags into a specified event group.
- [MPWaitForEvent](../1585656-mpwaitforevent.md): Deprecated. Retrieves event flags from a specified event group.

### Handling Kernel Notifications

- [MPCauseNotification](../1585754-mpcausenotification.md): Deprecated. Signals a kernel notification.
- [MPCreateNotification](../1585723-mpcreatenotification.md): Deprecated. Creates a kernel notification
- [MPDeleteNotification](../1585659-mpdeletenotification.md): Deprecated. Removes a kernel notification.
- [MPModifyNotification](../1585780-mpmodifynotification.md): Deprecated. Adds a simple notification to a kernel notification.
- [MPModifyNotificationParameters](../1585668-mpmodifynotificationparameters.md): Deprecated.

### Accessing Per-Task Storage Variables

- [MPAllocateTaskStorageIndex](../1585719-mpallocatetaskstorageindex.md): Deprecated. Returns an index number to access per-task storage.
- [MPDeallocateTaskStorageIndex](../1585649-mpdeallocatetaskstorageindex.md): Deprecated. Frees an index number used to access per-task storage
- [MPGetTaskStorageValue](../1585589-mpgettaskstoragevalue.md): Deprecated. Gets the storage value stored at a specified index number.
- [MPSetTaskStorageValue](../1585626-mpsettaskstoragevalue.md): Deprecated. Sets the storage value for a given index number.

### Memory Allocation Functions

- [MPAllocate](../1585756-mpallocate.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPAllocateAligned](../1585774-mpallocatealigned.md): Deprecated. Allocates a nonrelocatable memory block.
- [MPBlockClear](../1585642-mpblockclear.md): Deprecated. Clears a block of memory.
- [MPBlockCopy](../1585707-mpblockcopy.md): Deprecated. Copies a block of memory.
- [MPFree](../1585676-mpfree.md): Deprecated. Frees memory allocated by `MPAllocateAligned`.
- [MPGetAllocatedBlockSize](../1585717-mpgetallocatedblocksize.md): Deprecated. Returns the size of a memory block.

### Remote Calling Functions

- [MPRemoteCall](../1585652-mpremotecall.md): Deprecated. Calls a non-reentrant function and blocks the current task.
- [MPRemoteCallCFM](../1585757-mpremotecallcfm.md): Deprecated. Calls a non-reentrant function and blocks the current task.

### Timer Services Functions

- [MPArmTimer](../1585612-mparmtimer.md): Deprecated. Arms the timer to expire at a given time.
- [MPCancelTimer](../1585745-mpcanceltimer.md): Deprecated. Cancels an armed timer.
- [MPCreateTimer](../1585748-mpcreatetimer.md): Deprecated. Creates a timer.
- [MPDelayUntil](../1585647-mpdelayuntil.md): Deprecated. Blocks the calling task until a specified time.
- [MPDeleteTimer](../1585761-mpdeletetimer.md): Deprecated. Removes a timer.
- [MPSetTimerNotify](../1585726-mpsettimernotify.md): Deprecated. Sets the notification information associated with a timer.

### Exception Handling Functions

- [MPDisposeTaskException](../1585607-mpdisposetaskexception.md): Deprecated. Removes a task exception.
- [MPExtractTaskState](../1585718-mpextracttaskstate.md): Deprecated. Extracts state information from a suspended task.
- [MPSetExceptionHandler](../1585759-mpsetexceptionhandler.md): Deprecated. Sets an exception handler for a task.
- [MPSetTaskState](../1585601-mpsettaskstate.md): Deprecated. Sets state information for a suspended task.
- [MPThrowException](../1585743-mpthrowexception.md): Deprecated. Throws an exception to a specified task.

### Debugger Support Functions

- [MPRegisterDebugger](../1585573-mpregisterdebugger.md): Deprecated. Registers a debugger.
- [MPUnregisterDebugger](../1585598-mpunregisterdebugger.md): Deprecated. Unregisters a debugger.

### Callbacks

- [MPRemoteProcedure](../mpremoteprocedure.md): Defines a remote procedure call.
- [TaskProc](../taskproc.md): Defines the entry point of a task.

### Data Types

- [MPAddressSpaceID](../mpaddressspaceid.md)
- [MPAddressSpaceInfo](../mpaddressspaceinfo.md)
- [MPAreaID](../mpareaid.md)
- [MPCoherenceID](../mpcoherenceid.md): Represents a memory coherence group.
- [MPConsoleID](../mpconsoleid.md)
- [MPCpuID](../mpcpuid.md): Represents a CPU ID.
- [MPCriticalRegionID](../mpcriticalregionid.md): Represents a critical region ID, which Multiprocessing Services uses to manipulate critical regions.
- [MPCriticalRegionInfo](../mpcriticalregioninfo.md)
- [MPEventFlags](../mpeventflags.md): Represents event information for an event group.
- [MPEventID](../mpeventid.md): Represents an event group ID, which Multiprocessing Services uses to manipulate event groups.
- [MPEventInfo](../mpeventinfo.md)
- [MPExceptionKind](../mpexceptionkind.md): Represents the kind of exception thrown.
- [MPNotificationID](../mpnotificationid.md): Represents a notification ID, which Multiprocessing Services uses to manipulate kernel notifications.
- [MPNotificationInfo](../mpnotificationinfo.md)
- [MPOpaqueID](../mpopaqueid.md): Represents a generic notification ID (that is, an ID that could be a queue ID, event ID, kernel notification ID, or semaphore ID).
- [MPOpaqueIDClass](../mpopaqueidclass.md)
- [MPPageSizeClass](../mppagesizeclass.md)
- [MPProcessID](../mpprocessid.md): Represents a process ID.
- [MPQueueID](../mpqueueid.md): Represents a queue ID, which Multiprocessing Services uses to manipulate message queues.
- [MPQueueInfo](../mpqueueinfo.md)
- [MPSemaphoreCount](../mpsemaphorecount.md): Represents a semaphore count.
- [MPSemaphoreID](../mpsemaphoreid.md): Represents a semaphore ID, which Multiprocessing Services uses to manipulate semaphores.
- [MPSemaphoreInfo](../mpsemaphoreinfo.md)
- [MPTaskID](../mptaskid.md): Represents a task ID.
- [MPTaskInfo](../mptaskinfo.md): Contains information about a task.
- [MPTaskInfoVersion2](../mptaskinfoversion2.md)
- [MPTaskStateKind](../mptaskstatekind.md)
- [MPTaskWeight](../mptaskweight.md): Represents the relative processor weighting of a task.
- [MPTimerID](../mptimerid.md): Represents a timer ID.
- [TaskStorageIndex](../taskstorageindex.md): Represents a task storage index value used by functions described in “Accessing Per-Task Storage Variables.”
- [TaskStorageValue](../taskstoragevalue.md): Represents a task storage value used by functions described in “Accessing Per-Task Storage Variables.”

### Constants

- [Allocation constants](../1585776-allocation_constants.md): Deprecated. The maximum memory allocation size.
- [Task IDs](../1585747-task_ids.md): Deprecated. Use to specify no task ID.
- [Data Structure Version Constants](../1508102-data_structure_version_constants.md): Deprecated. Data structure version information constants.
- [Values for the MPOpaqueIDClass type](../1585638-values_for_the_mpopaqueidclass_t.md): Deprecated. Constants indicating the source of a generic notification.
- [Memory Allocation Alignment Constants](../1585698-memory_allocation_alignment_cons.md): Deprecated. Specify the alignment of the desired memory block when calling the `MPAllocateAligned` function.
- [Memory Allocation Option Constants](../1585664-memory_allocation_option_constan.md): Deprecated. Specify optional actions when calling the `MPAllocateAligned` function.
- [MPDebuggerLevel](../mpdebuggerlevel.md): Indicates the debugger level.
- [Library Version Constants](../1585672-library_version_constants.md): Deprecated. Identifies the current library version.
- [MPRemoteContext](../mpremotecontext.md): Specify which contexts are allowed to execute the callback function when using `MPRemoteCall`.
- [MPTaskOptions](../mptaskoptions.md): Specify optional actions when calling the `MPCreateTask` function.
- [Task Exception Disposal Constants](../1585628-task_exception_disposal_constant.md): Deprecated. Specify actions to take on an exception when passed in the `action` parameter of the `MPDisposeTaskException` function.
- [Task Information Structure Version Constant](../1585620-task_information_structure_versi.md): Deprecated. Indicates the current version of the `MPTaskInfo` structure (returned as the first field).
- [Task Run State Constants](../1585643-task_run_state_constants.md): Deprecated. Indicate the state of the task when returned as part of the `MPTaskInfo` data structure.
- [Task State Constants](../1585773-task_state_constants.md): Deprecated. Specify what states you want to set or obtain when calling the `MPExtractTaskState` or `MPSetTaskState` functions.
- [Timer Duration Constants](../1585641-timer_duration_constants.md): Deprecated. Specify the maximum time a task should wait for an event to occur.
- [Timer Option Masks](../1585611-timer_option_masks.md): Deprecated. Indicate optional actions when calling `MPArmTimer`.

### Result Codes

- [kMPIterationEndErr](../1560027-anonymous/kmpiterationenderr.md)
- [kMPPrivilegedErr](../1560027-anonymous/kmpprivilegederr.md)
- [kMPProcessCreatedErr](../1560027-anonymous/kmpprocesscreatederr.md)
- [kMPProcessTerminatedErr](../1560027-anonymous/kmpprocessterminatederr.md)
- [kMPTaskCreatedErr](../1560027-anonymous/kmptaskcreatederr.md)
- [kMPTaskBlockedErr](../1560027-anonymous/kmptaskblockederr.md): The desired task is blocked.
- [kMPTaskStoppedErr](../1560027-anonymous/kmptaskstoppederr.md): The desired task is stopped.
- [kMPDeletedErr](../1560027-anonymous/kmpdeletederr.md): The desired notification the function was waiting upon was deleted.
- [kMPTimeoutErr](../1560027-anonymous/kmptimeouterr.md): The designated timeout interval passed before the function could take action.
- [kMPInsufficientResourcesErr](../1560027-anonymous/kmpinsufficientresourceserr.md): Could not complete task due to unavailable Multiprocessing Services resources. Note that many functions return this value as a general error when the desired action could not be performed.
- [kMPInvalidIDErr](../1560027-anonymous/kmpinvalididerr.md): Invalid ID value. For example, an invalid message queue ID was passed to `MPNotifyQueue`.

## See Also

### Services

- [Debugger Services](debugger_services.md): Deprecated. Handle assertions and exceptions at run time.
