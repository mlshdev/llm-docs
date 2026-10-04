> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/kmaxbundledparalleltasks

# kMaxBundledParallelTasks

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Macro  
**Availability:** DriverKit

## Declaration

```objectivec
#define kMaxBundledParallelTasks
```

## See Also

### Managing bundled parallel tasks

- [UserProcessBundledParallelTasks](iouserscsiparallelinterfacecontroller/userprocessbundledparalleltasks.md): Processes one or more parallel tasks in response to a call from the framework.
- [UserMapBundledParallelTaskCommandAndResponseBuffers](iouserscsiparallelinterfacecontroller/usermapbundledparalleltaskcommandandresponsebuffers.md): Maps the shared command and response buffers in the dext address space in response to a call from the framework.
- [BundledParallelTaskCompletion](iouserscsiparallelinterfacecontroller/bundledparalleltaskcompletion.md): Indicates to the system that the extension completed a bundled asynchronous request.
