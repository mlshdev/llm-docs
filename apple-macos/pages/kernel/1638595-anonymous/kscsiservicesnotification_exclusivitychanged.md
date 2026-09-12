> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1638595-anonymous/kscsiservicesnotification_exclusivitychanged](https://developer.apple.com/documentation/kernel/1638595-anonymous/kscsiservicesnotification_exclusivitychanged)

# kSCSIServicesNotification_ExclusivityChanged

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kSCSIServicesNotification_ExclusivityChanged = 0x69000030
```

<a id="discussion"></a>

## Discussion

Message sent when a change in exclusivity state occurs. Usually in response to acquiring/releasing exclusive access to a device via a user client.
