> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1523851-iopsgetbatterywarninglevel

# IOPSGetBatteryWarningLevel

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Indicates whether the system is at a low battery warning level.

## Declaration

```objectivec
IOPSLowBatteryWarningLevel IOPSGetBatteryWarningLevel(void);
```

<a id="discussion"></a>

## Discussion

If your app runs in full screen mode and occludes macOS's battery monitor's low battery warnings, you should alert the user at least when the system is in kIOPSLowBatteryWarnFinal.
