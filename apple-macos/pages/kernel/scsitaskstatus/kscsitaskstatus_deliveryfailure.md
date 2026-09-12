> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/scsitaskstatus/kscsitaskstatus_deliveryfailure](https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_deliveryfailure)

# kSCSITaskStatus_DeliveryFailure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_DeliveryFailure = 0x05
```

<a id="discussion"></a>

## Discussion

If the task is unable to be delivered to the device due to a failure in the SCSI Protocol Layer, such as a bus reset or communications error, but the device is is known to be functioning properly, the task status shall be set to kSCSITaskStatus_DeliveryFailure. This can also be reported if the task could not be delivered due to a protocol error that has since been corrected.
