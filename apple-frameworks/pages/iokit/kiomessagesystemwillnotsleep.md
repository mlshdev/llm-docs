> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomessagesystemwillnotsleep](https://developer.apple.com/documentation/iokit/kiomessagesystemwillnotsleep)

# kIOMessageSystemWillNotSleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageSystemWillNotSleep
```

<a id="discussion"></a>

## Discussion

Announces that the system has retracted a previous attempt to sleep; it follows `kIOMessageCanSystemSleep`. Delivered to in-kernel IOKit drivers via `kIOGeneralInterest` and `kIOPriorityPowerStateInterest`. Delivered to user clients of `IORegisterForSystemPower`.
