> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1499606-anonymous/kiopmrestartcapability](https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopmrestartcapability)

# kIOPMRestartCapability

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
kIOPMRestartCapability = 0x00000080
```

<a id="discussion"></a>

## Discussion

Used only by certain IOKit Families (USB). Not defined or used by generic Power Management. Read your family documentation to see if you should define a powerstate using these capabilities.
