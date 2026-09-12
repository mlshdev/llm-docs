> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificsleepcommand](https://developer.apple.com/documentation/kernel/1638592-anonymous/kscsiprotocolfeature_protocolspecificsleepcommand)

# kSCSIProtocolFeature_ProtocolSpecificSleepCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIProtocolFeature_ProtocolSpecificSleepCommand = 4
```

<a id="discussion"></a>

## Discussion

Used to determine if the SCSI Protocol Services Driver supports protocol specific sleep commands to a drive. This is used for sleeping drives specifically ATAPI devices on ATA buses.
