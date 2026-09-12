> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_hierarchicallogicalunits](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_hierarchicallogicalunits)

# kSCSIProtocolFeature_HierarchicalLogicalUnits

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_HierarchicalLogicalUnits = 15
```

<a id="discussion"></a>

## Discussion

kSCSIProtocolFeature_HierarchicalLogicalUnits: If the SCSI Protocol Services layer supports hierarchical logical units, then the protocol services layer should report true and use IOSCSIProtocolServices::GetLogicalUnitBytes() to retrieve the full 8 bytes of LUN information.
