> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopmsleep

# kIOPMSleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
kIOPMSleep = 0x00000001
```

<a id="discussion"></a>

## Discussion

Used only by certain IOKit Families (USB). Not defined or used by generic Power Management. Read your family documentation to see if you should define a powerstate using these capabilities.
