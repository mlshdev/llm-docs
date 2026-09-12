> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstimeremainingunknown](https://developer.apple.com/documentation/iokit/kiopstimeremainingunknown)

# kIOPSTimeRemainingUnknown

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Possible return value from [IOPSGetTimeRemainingEstimate](1523835-iopsgettimeremainingestimate.md)

## Declaration

```objectivec
#define kIOPSTimeRemainingUnknown
```

<a id="discussion"></a>

## Discussion

Indicates the system is connected to a limited power source, but the system is still calculating a time remaining estimate. Check for a valid estimate again when the notification kIOPSPowerSourcesNotificationKey fires.
