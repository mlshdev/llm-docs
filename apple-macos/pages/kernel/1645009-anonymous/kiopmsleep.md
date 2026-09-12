> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645009-anonymous/kiopmsleep](https://developer.apple.com/documentation/kernel/1645009-anonymous/kiopmsleep)

# kIOPMSleep

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOPMSleep = 0x00000001
```

<a id="discussion"></a>

## Discussion

Used only by certain IOKit Families (USB). Not defined or used by generic Power Management. Read your family documentation to see if you should define a powerstate using these capabilities.
