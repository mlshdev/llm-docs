> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiosystemloadadvisorycombinedlevelkey

# kIOSystemLoadAdvisoryCombinedLevelKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Key for dictionary returned by IOCopySystemLoadAdvisoryDetailed

## Declaration

```objectivec
#define kIOSystemLoadAdvisoryCombinedLevelKey
```

<a id="discussion"></a>

## Discussion

Provides a combined level based on UserLevel, BatteryLevel, and ThermalLevels; the combined level is the minimum of these levels. In the future, this combined level may represent new levels as well. The combined level is identical to the value returned by IOGetSystemLoadAdvisory().
