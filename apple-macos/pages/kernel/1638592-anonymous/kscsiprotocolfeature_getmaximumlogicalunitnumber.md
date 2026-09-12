> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_getmaximumlogicalunitnumber](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_getmaximumlogicalunitnumber)

# kSCSIProtocolFeature_GetMaximumLogicalUnitNumber

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_GetMaximumLogicalUnitNumber = 5
```

<a id="discussion"></a>

## Discussion

If the SCSI Protocol Services Driver supports logical units, it will report the maximum addressable ID that it supports in the UInt32 pointer that is passed in as the serviceValue. If only one unit is supported, the driver should return false for this query.
