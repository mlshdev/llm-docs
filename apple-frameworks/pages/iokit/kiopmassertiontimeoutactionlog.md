> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontimeoutactionlog](https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionlog)

# kIOPMAssertionTimeoutActionLog

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A potential value for [kIOPMAssertionTimeoutActionKey](kiopmassertiontimeoutactionkey.md)

## Declaration

```objectivec
#define kIOPMAssertionTimeoutActionLog
```

<a id="discussion"></a>

## Discussion

When this timeout action is specified, PM will log the timeout event but will not turn off or affect the setting of the assertion in any way.
