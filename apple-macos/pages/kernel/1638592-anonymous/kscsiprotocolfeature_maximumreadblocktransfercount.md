> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumreadblocktransfercount](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_maximumreadblocktransfercount)

# kSCSIProtocolFeature_MaximumReadBlockTransferCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_MaximumReadBlockTransferCount = 6
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver has a maximum number of blocks that can be transfered in a read request, it will return true to this query and return the block count in the UInt32 pointer that is passed in as the serviceValue.
