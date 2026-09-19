> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbdeviceinformationbits/kusbinformationroothubisbuiltin

# kUSBInformationRootHubisBuiltIn

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
kUSBInformationRootHubisBuiltIn = 10
```

<a id="discussion"></a>

## Discussion

If this is a root hub simulation and it's built into the enclosure, this bit is set. If it's on an expansion card, it will be cleared
