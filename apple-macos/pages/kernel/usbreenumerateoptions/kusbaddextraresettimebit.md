> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbreenumerateoptions/kusbaddextraresettimebit](https://developer.apple.com/documentation/kernel/usbreenumerateoptions/kusbaddextraresettimebit)

# kUSBAddExtraResetTimeBit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

Request extra time after reset.

## Declaration

```objectivec
kUSBAddExtraResetTimeBit = 31
```

<a id="discussion"></a>

## Discussion

Setting this bit causes the hub driver to wait 100 milliseconds before addressing the device after the reset following the reenumeration.
