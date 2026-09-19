> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbpowerrequesttypes/kusbpowerrequestwakerelease

# kUSBPowerRequestWakeRelease

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
kUSBPowerRequestWakeRelease = 2
```

<a id="discussion"></a>

## Discussion

When used with ReturnExtraPower(), it will send a message to all devices to return any extra wake power if possible.
