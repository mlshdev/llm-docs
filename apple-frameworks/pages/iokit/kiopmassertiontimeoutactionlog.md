> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionlog

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
