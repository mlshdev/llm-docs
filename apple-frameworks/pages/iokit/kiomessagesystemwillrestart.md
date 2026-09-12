> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomessagesystemwillrestart](https://developer.apple.com/documentation/iokit/kiomessagesystemwillrestart)

# kIOMessageSystemWillRestart

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.1+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageSystemWillRestart
```

<a id="discussion"></a>

## Discussion

Indicates an imminent system restart. Recipients have a limited amount of time to respond, otherwise the system will timeout and restart even without a response. Delivered to in-kernel IOKit drivers via `IOService::systemWillShutdown()`, and to clients of `registerPrioritySleepWakeInterest()`. Never delivered to user space notification clients.
