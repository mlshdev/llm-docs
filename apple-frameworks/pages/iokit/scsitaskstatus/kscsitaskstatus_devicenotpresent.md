> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_devicenotpresent](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_devicenotpresent)

# kSCSITaskStatus_DeviceNotPresent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_DeviceNotPresent = 0x04
```

<a id="discussion"></a>

## Discussion

If the task is unable to be delivered because the device has been detached, the task status shall be set to kSCSITaskStatus_DeviceNotPresent. This will allow the SCSI Application Layer to halt the sending of tasks to the device and, if supported, perform any device failover or system cleanup.
