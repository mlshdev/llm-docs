> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbreenumerateoptions/kusbaddextraresettimebit](https://developer.apple.com/documentation/iokit/usbreenumerateoptions/kusbaddextraresettimebit)

# kUSBAddExtraResetTimeBit

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
kUSBAddExtraResetTimeBit = 31
```

<a id="discussion"></a>

## Discussion

Setting this bit will cause the Hub driver to wait 100ms before addressing the device after the reset following the re-enumeration.
