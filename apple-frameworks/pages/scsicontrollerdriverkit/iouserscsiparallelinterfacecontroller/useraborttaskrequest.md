> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/useraborttaskrequest](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/useraborttaskrequest)

# UserAbortTaskRequest

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Aborts a single task.

## Declaration

```objectivec
virtual kern_return_t UserAbortTaskRequest(uint64_t theT, uint64_t theL, uint64_t theQ, uint32_t *response);
```

## Parameters

- `theT`: The target containing the task to abort.
- `theL`: The logical unit containing the task to abort.
- `theQ`: The tag of the task to abort.
- `response`: On return, a SCSI protocol-specific value indicating the success or failure of the request.

<a id="Discussion"></a>

## Discussion

This method doesn’t clear previously established conditions, such as `MODE SELECT` parameters, reservations, and autocontingent allegiance (ACA) attributes.

## See Also

### Performing SCSI Standard Task Management

- [UserAbortTaskSetRequest](useraborttasksetrequest.md): Aborts all tasks in a logical unit.
- [UserClearACARequest](userclearacarequest.md): Removes an autocontingent allegiance (ACA) attribute from a logical unit’s task set.
- [UserClearTaskSetRequest](usercleartasksetrequest.md): Aborts all tasks in a logical unit and clears their data.
- [UserLogicalUnitResetRequest](userlogicalunitresetrequest.md): Resets a logical unit.
- [UserTargetResetRequest](usertargetresetrequest.md): Resets a target.
