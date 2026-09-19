> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbnotificationtypes/kusbnotificationpostforcedresume

# kUSBNotificationPostForcedResume

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
kUSBNotificationPostForcedResume = (1 << kUSBNotificationPostForcedResumeBit)
```

<a id="discussion"></a>

## Discussion

A notification is sent after a resume which happens after a forced suspend (e.g. system wake).
