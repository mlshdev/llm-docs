> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbdeviceinformationbits/kusbinformationroothubisbuiltin](https://developer.apple.com/documentation/kernel/usbdeviceinformationbits/kusbinformationroothubisbuiltin)

# kUSBInformationRootHubisBuiltIn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

The USB root hub is built-in.

## Declaration

```objectivec
kUSBInformationRootHubisBuiltIn = 10
```

<a id="discussion"></a>

## Discussion

If this is a root hub simulation and it’s built in to the enclosure, this bit is set. If it’s on an expansion card, this bit is clear.
