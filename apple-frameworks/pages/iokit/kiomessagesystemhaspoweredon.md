> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiomessagesystemhaspoweredon

# kIOMessageSystemHasPoweredOn

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageSystemHasPoweredOn
```

<a id="discussion"></a>

## Discussion

Announces that the system and its devices have woken up. Delivered to in-kernel IOKit drivers via `kIOGeneralInterest` and `kIOPriorityPowerStateInterest`. Delivered to user clients of `IORegisterForSystemPower`.
