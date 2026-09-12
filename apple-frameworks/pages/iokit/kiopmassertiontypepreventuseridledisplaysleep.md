> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontypepreventuseridledisplaysleep](https://developer.apple.com/documentation/iokit/kiopmassertiontypepreventuseridledisplaysleep)

# kIOPMAssertionTypePreventUserIdleDisplaySleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Prevents the display from dimming automatically.

## Declaration

```objectivec
#define kIOPMAssertionTypePreventUserIdleDisplaySleep
```

<a id="discussion"></a>

## Discussion

When asserted and set to level [kIOPMAssertionLevelOn](1557096-assertion/kiopmassertionlevelon.md), will prevent the display from turning off due to a period of idle user activity. Note that the display may still sleep from other reasons, like a user closing a portable's lid or the machine sleeping. If the display is already off, this assertion does not light up the display. If display needs to be turned on, then consider calling function [IOPMAssertionDeclareUserActivity](1557127-iopmassertiondeclareuseractivity.md).

While the display is prevented from dimming, the system cannot go into idle sleep.

This assertion does not put the system into Dark Wake.

A caller publish the AssertionType in its assertion properties dictionary. The AssertionType should be a key in the properties dictionary, with a value of a CFNumber containing the kCFNumberIntegerType value [kIOPMAssertionLevelOff](1557096-assertion/kiopmassertionleveloff.md) or [kIOPMAssertionLevelOn](1557096-assertion/kiopmassertionlevelon.md).
