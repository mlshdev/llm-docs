> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userclearacarequest](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userclearacarequest)

# UserClearACARequest

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Removes an autocontingent allegiance (ACA) attribute from a logical unit’s task set.

## Declaration

```objectivec
virtual kern_return_t UserClearACARequest(uint64_t theT, uint64_t theL, uint32_t *response);
```

## Parameters

- `theT`: The target containing the tasks to clear ACA attributes from.
- `theL`: The logical unit containing the tasks to clear ACA attributes from.
- `response`: On return, a SCSI protocol-specific value indicating the success or failure of the request.

## See Also

### Performing SCSI Standard Task Management

- [UserAbortTaskRequest](useraborttaskrequest.md): Aborts a single task.
- [UserAbortTaskSetRequest](useraborttasksetrequest.md): Aborts all tasks in a logical unit.
- [UserClearTaskSetRequest](usercleartasksetrequest.md): Aborts all tasks in a logical unit and clears their data.
- [UserLogicalUnitResetRequest](userlogicalunitresetrequest.md): Resets a logical unit.
- [UserTargetResetRequest](usertargetresetrequest.md): Resets a target.
