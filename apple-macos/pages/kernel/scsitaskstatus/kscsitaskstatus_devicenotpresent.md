> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_devicenotpresent

# kSCSITaskStatus_DeviceNotPresent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_DeviceNotPresent = 0x04
```

<a id="discussion"></a>

## Discussion

If the task is unable to be delivered because the device has been detached, the task status shall be set to kSCSITaskStatus_DeviceNotPresent. This will allow the SCSI Application Layer to halt the sending of tasks to the device and, if supported, perform any device failover or system cleanup.
