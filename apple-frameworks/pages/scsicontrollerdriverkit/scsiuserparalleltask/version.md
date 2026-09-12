> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/scsiuserparalleltask/version](https://developer.apple.com/documentation/scsicontrollerdriverkit/scsiuserparalleltask/version)

# version

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit

The version of the parallel task structure currently in use.

## Declaration

```objectivec
uint64_t version;
```

## See Also

### Task Properties

- [SCSIUserParallelTaskVersion](../scsiuserparalleltaskversion.md): Constants that represent versions of the user parallel task structure.
- [fTargetID](ftargetid.md): An identifier that represents a SCSI target device.
- [fSCSIParallelFeatureRequest](fscsiparallelfeaturerequest.md): An array of features of the SCSI parallel interface to negotiate.
- [SCSIParallelFeatureRequest](../scsiparallelfeaturerequest.md): An enumeration of feature negotiation behaviors.
- [fSCSIParallelFeatureRequestCount](fscsiparallelfeaturerequestcount.md): The number of features to negotiate.
- [fControllerTaskIdentifier](fcontrollertaskidentifier.md): A unique identifier for a task.
- [fRequestedTransferCount](frequestedtransfercount.md): The requested data transfer count for the request’s data.
- [fBufferIOVMAddr](fbufferiovmaddr.md): The start address of the generated physical segment of the data buffer.
- [fTaskAttribute](ftaskattribute.md): The SCSI task attribute of the task.
- [fTaskTagIdentifier](ftasktagidentifier.md): A 64-bit number that represents a unique task identifier.
- [fLogicalUnitBytes](flogicalunitbytes.md): The request’s logical unit bytes.
- [fCommandDescriptorBlock](fcommanddescriptorblock.md): The task’s SCSI command descriptor block.
- [fCommandSize](fcommandsize.md): The size of the SCSI command descriptor block in bytes.
- [fTransferDirection](ftransferdirection.md): The direction of data transfer for this task.
- [reserved](reserved.md): An unused field reserved for future use.
