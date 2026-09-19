> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionturnoff

# kIOPMAssertionTimeoutActionTurnOff

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A potential value for [kIOPMAssertionTimeoutActionKey](kiopmassertiontimeoutactionkey.md)

## Declaration

```objectivec
#define kIOPMAssertionTimeoutActionTurnOff
```

<a id="discussion"></a>

## Discussion

When a timeout expires with this action, Power Management will log the timeout event, and will set the assertion's level to [kIOPMAssertionLevelOff](1557096-assertion/kiopmassertionleveloff.md).
