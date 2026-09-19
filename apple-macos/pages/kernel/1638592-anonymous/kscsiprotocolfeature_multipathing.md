> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_multipathing

# kSCSIProtocolFeature_MultiPathing

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_MultiPathing = 16
```

<a id="discussion"></a>

## Discussion

kSCSIProtocolFeature_MultiPathing: If the SCSI Protocol Services layer supports multi-pathing, then the protocol services layer should report true. This is used to support multiple paths to a logical unit by creating a IOSCSIMultipathedLogicalUnit object.
