> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopscommandenableaudiblealarmkey

# kIOPSCommandEnableAudibleAlarmKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Command to give a UPS when it should either enable or disable the audible alarm.

## Declaration

```objectivec
#define kIOPSCommandEnableAudibleAlarmKey
```

<a id="discussion"></a>

## Discussion

- The matching argument should be a CFBooleanRef where kCFBooleanTrue enables the alarm and
- kCFBooleanFalse diables the alarm
