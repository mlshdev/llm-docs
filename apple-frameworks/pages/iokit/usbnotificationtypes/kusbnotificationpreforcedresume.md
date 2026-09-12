> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbnotificationtypes/kusbnotificationpreforcedresume](https://developer.apple.com/documentation/iokit/usbnotificationtypes/kusbnotificationpreforcedresume)

# kUSBNotificationPreForcedResume

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
kUSBNotificationPreForcedResume = (1 << kUSBNotificationPreForcedResumeBit)
```

<a id="discussion"></a>

## Discussion

A notification is sent before a resume which happens after a forced suspend (e.g. system wake).
