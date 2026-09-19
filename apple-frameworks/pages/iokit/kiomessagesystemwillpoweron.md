> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiomessagesystemwillpoweron

# kIOMessageSystemWillPowerOn

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.3+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageSystemWillPowerOn
```

<a id="discussion"></a>

## Discussion

Announces that the system is beginning to power the device tree; most devices are unavailable at this point.. Delivered to in-kernel IOKit drivers via `kIOGeneralInterest` and `kIOPriorityPowerStateInterest`. Delivered to user clients of `IORegisterForSystemPower`.
