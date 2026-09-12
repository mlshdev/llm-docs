> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbmessageporthasbeensuspended](https://developer.apple.com/documentation/iokit/kiousbmessageporthasbeensuspended)

# kIOUSBMessagePortHasBeenSuspended

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
#define kIOUSBMessagePortHasBeenSuspended
```

<a id="discussion"></a>

## Discussion

Messages specific to the IOUSBFamily. Note that the iokit_usb_msg(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
