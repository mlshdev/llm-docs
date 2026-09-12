> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_tasktimeoutoccurred](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_tasktimeoutoccurred)

# kSCSITaskStatus_TaskTimeoutOccurred

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_TaskTimeoutOccurred = 0x01
```

<a id="discussion"></a>

## Discussion

If a task is aborted by the SCSI Protocol Layer due to it exceeding the timeout value specified by the task, the task status shall be set to kSCSITaskStatus_TaskTimeoutOccurred.
