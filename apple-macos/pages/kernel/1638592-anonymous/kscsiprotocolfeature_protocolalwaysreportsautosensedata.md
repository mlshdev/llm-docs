> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolalwaysreportsautosensedata

# kSCSIProtocolFeature_ProtocolAlwaysReportsAutosenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolAlwaysReportsAutosenseData = 11
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver always reports available autosense data when a kSCSITaskStatus_CHECK_CONDITION is set, then the protocol layer should return true. E.g. FireWire transport drivers should respond true to this.
