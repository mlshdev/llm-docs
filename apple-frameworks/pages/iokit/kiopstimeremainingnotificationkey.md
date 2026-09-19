> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopstimeremainingnotificationkey

# kIOPSTimeRemainingNotificationKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

C-string key for a notification that fires when the power source(s) time remaining changes.

## Declaration

```objectivec
#define kIOPSTimeRemainingNotificationKey
```

<a id="discussion"></a>

## Discussion

Use notify(3) API to register for notifications.
