> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontimeoutactionrelease](https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionrelease)

# kIOPMAssertionTimeoutActionRelease

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A potential value for [kIOPMAssertionTimeoutActionKey](kiopmassertiontimeoutactionkey.md)

## Declaration

```objectivec
#define kIOPMAssertionTimeoutActionRelease
```

<a id="discussion"></a>

## Discussion

When a timeout expires with this action, Power Management will log the timeout event, and will release the assertion.
