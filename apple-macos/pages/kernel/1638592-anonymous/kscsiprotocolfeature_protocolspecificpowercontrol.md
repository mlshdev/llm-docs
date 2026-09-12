> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificpowercontrol](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificpowercontrol)

# kSCSIProtocolFeature_ProtocolSpecificPowerControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolSpecificPowerControl = 13
```

<a id="discussion"></a>

## Discussion

Used to determine if the SCSI Protocol Services Driver supports switching the power to the drive on and off. This is used for aggressive power management, specifically for SATAPI devices on AHCI buses.
