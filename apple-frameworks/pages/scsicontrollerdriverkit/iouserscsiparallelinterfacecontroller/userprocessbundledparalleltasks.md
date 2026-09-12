> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userprocessbundledparalleltasks](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userprocessbundledparalleltasks)

# UserProcessBundledParallelTasks

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Processes one or more parallel tasks in response to a call from the framework.

## Declaration

```objectivec
virtual void UserProcessBundledParallelTasks(const uint16_t parallelRequestSlotIndices[32], uint16_t parallelRequestSlotIndicesCount, OSAction *completion);
```

## Parameters

- `parallelRequestSlotIndices`: Indices of shared command buffer slots for the tasks to process. Entries from zero to `(parallelRequestSlotIndicesCount - 1)` have valid indices.
- `parallelRequestSlotIndicesCount`: The number of tasks to process.
- `completion`: An [OSAction](../../driverkit/osaction.md) object that the dext class uses to complete the request.

<a id="discussion"></a>

## Discussion

The system calls this method to put one or more commands on the bus. The framework populates a [SCSIUserParallelTask](../scsiuserparalleltask.md) for each task and makes it available in the command buffers. Access these command buffers with the indices passed in the `parallelRequestSlotIndices` parameter.

If the dext can’t process any commands, invoke [BundledParallelTaskCompletion](bundledparalleltaskcompletion.md) for those commands. The framework completes those commands with the response provided by the dext.

The framework only calls this method when the dext has successfully mapped command and response buffers in the dext address space in [UserMapBundledParallelTaskCommandAndResponseBuffers](usermapbundledparalleltaskcommandandresponsebuffers.md).

## See Also

### Managing Bundled Parallel Tasks

- [UserMapBundledParallelTaskCommandAndResponseBuffers](usermapbundledparalleltaskcommandandresponsebuffers.md): Maps the shared command and response buffers in the dext address space in response to a call from the framework.
- [BundledParallelTaskCompletion](bundledparalleltaskcompletion.md): Indicates to the system that the extension completed a bundled asynchronous request.
