> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiousbmessagehubportdevicedisconnected

# kIOUSBMessageHubPortDeviceDisconnected

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOUSBMessageHubPortDeviceDisconnected
```

<a id="discussion"></a>

## Discussion

Messages specific to the IOUSBFamily. Note that the iokit_usb_msg(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
