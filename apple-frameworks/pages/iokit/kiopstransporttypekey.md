> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstransporttypekey](https://developer.apple.com/documentation/iokit/kiopstransporttypekey)

# kIOPSTransportTypeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's data transport type (e.g. the means that the power source conveys power source data to the macOS machine).

## Declaration

```objectivec
#define kIOPSTransportTypeKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- A value of [kIOPSInternalType](kiopsinternaltype.md) describes an internal power source.
- [kIOPSUSBTransportType](kiopsusbtransporttype.md), [kIOPSNetworkTransportType](kiopsnetworktransporttype.md), and [kIOPSSerialTransportType](kiopsserialtransporttype.md) usually describe UPS's.
- For power source creators: Providing this key is REQUIRED.
- Type CFStringRef. Valid transport types are kIOPSSerialTransportType, kIOPSUSBTransportType, kIOPSNetworkTransportType, kIOPSInternalType
