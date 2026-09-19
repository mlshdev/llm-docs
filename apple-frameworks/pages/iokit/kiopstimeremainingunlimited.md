> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopstimeremainingunlimited

# kIOPSTimeRemainingUnlimited

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Possible return value from [IOPSGetTimeRemainingEstimate](1523835-iopsgettimeremainingestimate.md)

## Declaration

```objectivec
#define kIOPSTimeRemainingUnlimited
```

<a id="discussion"></a>

## Discussion

Indicates the system is connected to an external power source, without a time limit.
