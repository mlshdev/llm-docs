> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomessagesystempagingoff](https://developer.apple.com/documentation/iokit/kiomessagesystempagingoff)

# kIOMessageSystemPagingOff

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.7+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageSystemPagingOff
```

<a id="discussion"></a>

## Discussion

Indicates an imminent system shutdown, paging device now unavailable. Recipients have a limited amount of time to respond, otherwise the system will timeout and shutdown even without a response. Delivered to clients of `registerPrioritySleepWakeInterest()`. Never delivered to user space notification clients.
