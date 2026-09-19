> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_no_status

# kSCSITaskStatus_No_Status

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_No_Status = 0xFF
```

<a id="discussion"></a>

## Discussion

This status is not defined by the SCSI specifications, but is here to provide a status that can be returned in cases where there is not status available from the device or protocol, for example, when the service response is neither TASK_COMPLETED nor LINK_COMMAND_COMPLETE or when the service response is SERVICE_DELIVERY_OR_TARGET_FAILURE and the reason for failure could not be determined.
