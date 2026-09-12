> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumwritetransferbytecount](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumwritetransferbytecount)

# kSCSIProtocolFeature_MaximumWriteTransferByteCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_MaximumWriteTransferByteCount = 9
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver has a maximum byte count that can be transferred in a write request, it will return true to this query and return the byte count in the UInt64 pointer that is passed in as the serviceValue.
