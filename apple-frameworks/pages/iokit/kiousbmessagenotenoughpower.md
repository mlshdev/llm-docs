> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiousbmessagenotenoughpower

# kIOUSBMessageNotEnoughPower

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

## Declaration

```objectivec
#define kIOUSBMessageNotEnoughPower
```

<a id="discussion"></a>

## Discussion

Messages specific to the IOUSBFamily. Note that the iokit_usb_msg(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
