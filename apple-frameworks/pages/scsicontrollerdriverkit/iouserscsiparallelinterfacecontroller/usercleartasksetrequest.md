> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usercleartasksetrequest](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usercleartasksetrequest)

# UserClearTaskSetRequest

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Aborts all tasks in a logical unit and clears their data.

## Declaration

```objectivec
virtual kern_return_t UserClearTaskSetRequest(uint64_t theT, uint64_t theL, uint32_t *response);
```

## Parameters

- `theT`: The target containing the tasks to clear.
- `theL`: The logical unit containing the tasks to clear.
- `response`: On return, a SCSI protocol-specific value indicating the success or failure of the request.

<a id="Discussion"></a>

## Discussion

This method clears all pending and status data, but not previously established conditions, such as `MODE SELECT` parameters, reservations, and autocontingent allegiance (ACA) attributes.

## See Also

### Performing SCSI Standard Task Management

- [UserAbortTaskRequest](useraborttaskrequest.md): Aborts a single task.
- [UserAbortTaskSetRequest](useraborttasksetrequest.md): Aborts all tasks in a logical unit.
- [UserClearACARequest](userclearacarequest.md): Removes an autocontingent allegiance (ACA) attribute from a logical unit’s task set.
- [UserLogicalUnitResetRequest](userlogicalunitresetrequest.md): Resets a logical unit.
- [UserTargetResetRequest](usertargetresetrequest.md): Resets a target.
