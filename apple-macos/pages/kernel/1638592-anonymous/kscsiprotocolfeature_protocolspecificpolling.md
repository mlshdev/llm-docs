> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificpolling](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificpolling)

# kSCSIProtocolFeature_ProtocolSpecificPolling

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolSpecificPolling = 3
```

<a id="discussion"></a>

## Discussion

Used to determine if the SCSI Protocol Services Driver supports protocol specific polling for media. This is used for low-power polling specifically for ATAPI devices on ATA buses
