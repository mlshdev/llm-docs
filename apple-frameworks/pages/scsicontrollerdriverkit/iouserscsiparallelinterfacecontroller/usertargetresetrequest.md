> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usertargetresetrequest](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usertargetresetrequest)

# UserTargetResetRequest

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Resets a target.

## Declaration

```objectivec
virtual kern_return_t UserTargetResetRequest(uint64_t theT, uint32_t *response);
```

## Parameters

- `theT`: The target to reset.
- `response`: On return, a SCSI protocol-specific value indicating the success or failure of the request.

<a id="Discussion"></a>

## Discussion

The definition of the reset event that this request performs depends on the SCSI protocol.

## See Also

### Performing SCSI Standard Task Management

- [UserAbortTaskRequest](useraborttaskrequest.md): Aborts a single task.
- [UserAbortTaskSetRequest](useraborttasksetrequest.md): Aborts all tasks in a logical unit.
- [UserClearACARequest](userclearacarequest.md): Removes an autocontingent allegiance (ACA) attribute from a logical unit’s task set.
- [UserClearTaskSetRequest](usercleartasksetrequest.md): Aborts all tasks in a logical unit and clears their data.
- [UserLogicalUnitResetRequest](userlogicalunitresetrequest.md): Resets a logical unit.
