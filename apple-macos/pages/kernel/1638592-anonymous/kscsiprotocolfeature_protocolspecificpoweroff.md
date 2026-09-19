> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificpoweroff

# kSCSIProtocolFeature_ProtocolSpecificPowerOff

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolSpecificPowerOff = 12
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver supports removing the power to the drive, then the protocol layer should return true. This is used for aggressive power management, specifically for ATAPI devices on ATA buses.
