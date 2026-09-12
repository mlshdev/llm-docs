> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/encoderequest](https://developer.apple.com/documentation/iokit/encoderequest)

# EncodeRequest

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define EncodeRequest(request, direction, type, recipient)
```

<a id="discussion"></a>

## Discussion

Macro that encodes the bRequest and bRequestType fields of a IOUSBDevRequest into a single value. It is useful when one needs to know what type of request the IOUSBDevRequest encodes and simplifies comparisons.

## See Also

### Miscellaneous

- [USBmakebmRequestType](usbmakebmrequesttype.md)
