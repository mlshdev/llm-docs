> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_deliveryfailure](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_deliveryfailure)

# kSCSITaskStatus_DeliveryFailure

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_DeliveryFailure = 0x05
```

<a id="discussion"></a>

## Discussion

If the task is unable to be delivered to the device due to a failure in the SCSI Protocol Layer, such as a bus reset or communications error, but the device is is known to be functioning properly, the task status shall be set to kSCSITaskStatus_DeliveryFailure. This can also be reported if the task could not be delivered due to a protocol error that has since been corrected.
