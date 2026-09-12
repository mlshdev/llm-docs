> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbinterfacenotfound](https://developer.apple.com/documentation/iokit/kiousbinterfacenotfound)

# kIOUSBInterfaceNotFound

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define kIOUSBInterfaceNotFound
```

<a id="discussion"></a>

## Discussion

Errors specific to the IOUSBFamily. Note that the iokit_usb_err(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
