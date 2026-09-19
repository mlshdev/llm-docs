> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbnotificationtypes/kusbnotificationpostforcedsuspend

# kUSBNotificationPostForcedSuspend

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
kUSBNotificationPostForcedSuspend = (1 << kUSBNotificationPostForcedSuspendBit)
```

<a id="discussion"></a>

## Discussion

A notification is sent after a forced suspend has been completed (e.g. system sleep).
