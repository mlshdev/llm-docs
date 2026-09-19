> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_task_set_full

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
