> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificasyncnotification

# kSCSIProtocolFeature_ProtocolSpecificAsyncNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolSpecificAsyncNotification = 14
```

<a id="discussion"></a>

## Discussion

Used to determine if the SCSI Protocol Services Driver supports asynchronous notifications from the drive. This is used to prevent polling for media, specifically for SATAPI devices on AHCI buses.
