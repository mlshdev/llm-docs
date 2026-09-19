> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbmakebmrequesttype

# USBmakebmRequestType

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define USBmakebmRequestType(direction, type, recipient)
```

<a id="discussion"></a>

## Discussion

Macro to encode the bRequest field of a Device Request. It is used when constructing an IOUSBDevRequest.

## See Also

### Miscellaneous

- [EncodeRequest](encoderequest.md)
