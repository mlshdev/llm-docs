> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopstimeremainingunknown

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
