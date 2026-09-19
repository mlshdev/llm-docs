> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumreadtransferbytecount

# kSCSIProtocolFeature_MaximumReadTransferByteCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_MaximumReadTransferByteCount = 8
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver has a maximum byte count that can be transferred in a read request, it will return true to this query and return the byte count in the UInt64 pointer that is passed in as the serviceValue.
