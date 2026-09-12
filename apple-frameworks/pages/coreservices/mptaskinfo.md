> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mptaskinfo](https://developer.apple.com/documentation/coreservices/mptaskinfo)

# MPTaskInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains information about a task.

## Declaration

```objectivec
typedef struct MPTaskInfo {
    ...
} MPTaskInfo;
```

<a id="overview"></a>

## Overview

If you specify the `kMPTaskStateTaskInfo` constant when calling the function [MPExtractTaskState](1585718-mpextracttaskstate.md) , Multiprocessing Services returns state information in an `MPTaskInfo` structure.

## Topics

### Instance Properties

- [blockedObject](mptaskinfo/1585604-blockedobject.md): Reserved for use by macOS.
- [codePageFaults](mptaskinfo/1585602-codepagefaults.md): The number of page faults that occurred during code execution.
- [cpuID](mptaskinfo/1585706-cpuid.md): The ID of the last processor that ran this task.
- [cpuTime](mptaskinfo/1585771-cputime.md): The accumulated CPU time used by the task.
- [creationTime](mptaskinfo/1585621-creationtime.md): The time when the task was created.
- [dataPageFaults](mptaskinfo/1585751-datapagefaults.md): The number of page faults that occurred during data access.
- [lastCPU](mptaskinfo/1585608-lastcpu.md): The address of the last processor that ran this task.
- [name](mptaskinfo/1585574-name.md): The name of the task.
- [preemptions](mptaskinfo/1585763-preemptions.md): The number of times this task was preempted.
- [processID](mptaskinfo/1585786-processid.md): The ID of the process that owns this task.
- [queueName](mptaskinfo/1585610-queuename.md): A four-byte code indicating the status of the queue waiting on the task.
- [runState](mptaskinfo/1585619-runstate.md): The current state of the task (running, ready, or blocked).
- [schedTime](mptaskinfo/1585579-schedtime.md): The time when the task was last scheduled.
- [spaceID](mptaskinfo/1585770-spaceid.md): Address space ID of this task.
- [stackBase](mptaskinfo/1585715-stackbase.md): The lowest memory address of the task’s stack.
- [stackCurr](mptaskinfo/1585666-stackcurr.md): The current stack address.
- [stackLimit](mptaskinfo/1585650-stacklimit.md): The highest memory address of the task’s stack.
- [version](mptaskinfo/1585755-version.md): The version of this data structure.
- [weight](mptaskinfo/1585701-weight.md): The weighting assigned to this task.
