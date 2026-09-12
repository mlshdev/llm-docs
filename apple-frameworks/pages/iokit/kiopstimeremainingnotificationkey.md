> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstimeremainingnotificationkey](https://developer.apple.com/documentation/iokit/kiopstimeremainingnotificationkey)

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
