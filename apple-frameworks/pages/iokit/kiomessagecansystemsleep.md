> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiomessagecansystemsleep

# kIOMessageCanSystemSleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageCanSystemSleep
```

<a id="discussion"></a>

## Discussion

Announces/Requests permission to proceed to system sleep. Delivered to in-kernel IOKit drivers via `kIOGeneralInterest` and `kIOPriorityPowerStateInterest`. Delivered to user clients of `IORegisterForSystemPower`.
