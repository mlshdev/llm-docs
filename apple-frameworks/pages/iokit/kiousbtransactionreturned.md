> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbtransactionreturned](https://developer.apple.com/documentation/iokit/kiousbtransactionreturned)

# kIOUSBTransactionReturned

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
#define kIOUSBTransactionReturned
```

<a id="discussion"></a>

## Discussion

Errors specific to the IOUSBFamily. Note that the iokit_usb_err(x) translates to 0xe0004xxx, where xxx is the value in parenthesis as a hex number.
