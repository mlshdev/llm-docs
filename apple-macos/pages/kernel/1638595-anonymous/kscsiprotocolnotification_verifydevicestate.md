> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638595-anonymous/kscsiprotocolnotification_verifydevicestate](https://developer.apple.com/documentation/kernel/1638595-anonymous/kscsiprotocolnotification_verifydevicestate)

# kSCSIProtocolNotification_VerifyDeviceState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolNotification_VerifyDeviceState = 0x69000020
```

<a id="discussion"></a>

## Discussion

Private message sent between a SCSI protocol service provider and SCSI application layer driver to indicate device state may have changed and the device state should be re-verified by the SCSI Application Layer driver. An example would be a bus reset which clears the tray locking state of an ATAPI device.
