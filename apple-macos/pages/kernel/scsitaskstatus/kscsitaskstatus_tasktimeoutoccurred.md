> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/scsitaskstatus/kscsitaskstatus_tasktimeoutoccurred](https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_tasktimeoutoccurred)

# kSCSITaskStatus_TaskTimeoutOccurred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_TaskTimeoutOccurred = 0x01
```

<a id="discussion"></a>

## Discussion

If a task is aborted by the SCSI Protocol Layer due to it exceeding the timeout value specified by the task, the task status shall be set to kSCSITaskStatus_TaskTimeoutOccurred.
