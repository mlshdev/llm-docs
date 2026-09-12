> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontimeoutactionturnoff](https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionturnoff)

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
