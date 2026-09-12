> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_check_condition](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_check_condition)

# kSCSITaskStatus_CHECK_CONDITION

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_CHECK_CONDITION = 0x02
```

<a id="discussion"></a>

## Discussion

The task completed with a status of CHECK_CONDITION. Additional information about the condition should be available in the sense data.
