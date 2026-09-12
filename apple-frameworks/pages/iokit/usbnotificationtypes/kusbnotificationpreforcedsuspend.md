> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbnotificationtypes/kusbnotificationpreforcedsuspend](https://developer.apple.com/documentation/iokit/usbnotificationtypes/kusbnotificationpreforcedsuspend)

# kUSBNotificationPreForcedSuspend

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
kUSBNotificationPreForcedSuspend = (1 << kUSBNotificationPreForcedSuspendBit)
```

<a id="discussion"></a>

## Discussion

A notification is sent prior to a forced suspend (e.g. system sleep).
