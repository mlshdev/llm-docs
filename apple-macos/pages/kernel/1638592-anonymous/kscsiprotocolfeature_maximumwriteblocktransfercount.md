> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumwriteblocktransfercount](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumwriteblocktransfercount)

# kSCSIProtocolFeature_MaximumWriteBlockTransferCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_MaximumWriteBlockTransferCount = 7
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver has a maximum number of blocks that can be transferred in a write request, it will return true to this query and return the block count in the UInt32 pointer that is passed in as the serviceValue.
