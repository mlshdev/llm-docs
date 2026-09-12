> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_task_set_full](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_task_set_full)

# kSCSITaskStatus_TASK_SET_FULL

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_TASK_SET_FULL = 0x28
```

<a id="discussion"></a>

## Discussion

The task completed with a status of TASK_SET_FULL. The device server may need to complete a task before the initiator sends another.
