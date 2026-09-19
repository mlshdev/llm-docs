> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_task_set_full

# kSCSITaskStatus_TASK_SET_FULL

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_TASK_SET_FULL = 0x28
```

<a id="discussion"></a>

## Discussion

The task completed with a status of TASK_SET_FULL. The device server may need to complete a task before the initiator sends another.
