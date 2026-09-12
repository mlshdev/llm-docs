> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousbhostporttype/kiousbhostporttypestandard](https://developer.apple.com/documentation/usbdriverkit/tiousbhostporttype/kiousbhostporttypestandard)

# kIOUSBHostPortTypeStandard

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 19.0+

A general-purpose USB port.

## Declaration

```objectivec
kIOUSBHostPortTypeStandard
```

## See Also

### Getting the Port Types

- [kIOUSBHostPortTypeCaptive](kiousbhostporttypecaptive.md): A port for which the device cannot be physically disconnected.
- [kIOUSBHostPortTypeInternal](kiousbhostporttypeinternal.md): A port that cannot be physically disconnected from the host machine.
- [kIOUSBHostPortTypeAccessory](kiousbhostporttypeaccessory.md): A port for which the device might require additional authentication before a driver can access it.
- [kIOUSBHostPortTypeExpressCard](kiousbhostporttypeexpresscard.md): A port containing an expansion card.
