> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbunknownpipeerr](https://developer.apple.com/documentation/iokit/kiousbunknownpipeerr)

# kIOUSBUnknownPipeErr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define kIOUSBUnknownPipeErr
```

<a id="discussion"></a>

## Discussion

Errors specific to the IOUSBFamily. Note that the iokit_usb_err(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
