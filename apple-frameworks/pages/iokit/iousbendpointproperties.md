> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbendpointproperties](https://developer.apple.com/documentation/iokit/iousbendpointproperties)

# IOUSBEndpointProperties

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

## Declaration

```objectivec
typedef struct IOUSBEndpointProperties {
    ...
} IOUSBEndpointProperties;
```

<a id="overview"></a>

## Overview

Structure used with the IOUSBLib GetEndpointPropertiesV3 and GetPipePropertiesV3 API. Most of the fields are taken directly from corresponding Standard Endpoint Descriptor and SuperSpeed Endpoint Companion Descriptor. wBytesPerInterval will be synthesized for High Speed High Bandwidth Isochronous endpoints.

## Topics

### Instance Properties

- [bAlternateSetting](iousbendpointproperties/1425690-balternatesetting.md): Used as an input for GetEndpointPropertiesV3. Used as an output for GetPipePropertiesV3
- [bDirection](iousbendpointproperties/1425747-bdirection.md): Used as an input for GetEndpointPropertiesV3. Used as an output for GetPipePropertiesV3. One of kUSBIn or kUSBOut.
- [bEndpointNumber](iousbendpointproperties/1426375-bendpointnumber.md): Used as an input for GetEndpointPropertiesV3. Used as an output for GetPipePropertiesV3
- [bInterval](iousbendpointproperties/1426099-binterval.md): The bInterval field from the Standard Endpoint descriptor.
- [bMaxBurst](iousbendpointproperties/1425566-bmaxburst.md): For SuperSpeed endpoints, maximum number of packets the endpoint can send or receive as part of a burst
- [bMaxStreams](iousbendpointproperties/1425739-bmaxstreams.md): For SuperSpeed bulk endpoints, maximum number of streams this endpoint supports.
- [bMult](iousbendpointproperties/1426019-bmult.md): For SuperSpeed isoc endpoints, this is the mult value from the SuperSpeed Endpoint Companion Descriptor. For High Speed isoc and interrupt endpoints, this is bits 11 and 12 of the Standard Endpoint Descriptor, which represents a similar value.
- [bSyncType](iousbendpointproperties/1425347-bsynctype.md): For isoc endpoints only
- [bTransferType](iousbendpointproperties/1426064-btransfertype.md): One of kUSBControl, kUSBBulk, kUSBIsoc, or kUSBInterrupt
- [bUsageType](iousbendpointproperties/1425537-busagetype.md): For interrupt and isoc endpoints, the usage type. For Bulk endpoints of the UAS Mass Storage Protocol, the pipe ID.
- [bVersion](iousbendpointproperties/1426285-bversion.md): Version of the structure. Currently kUSBEndpointPropertiesVersion3. Need to set this when using this structure
- [wBytesPerInterval](iousbendpointproperties/1426234-wbytesperinterval.md): For SuperSpeed interrupt and isoc endpoints, this is the wBytesPerInterval from the SuperSpeed Endpoint Companion Descriptor. For High Speed High Bandwidth isoc endpoints, this will be equal to wMaxPacketSize \* (bMult+1).
- [wMaxPacketSize](iousbendpointproperties/1426352-wmaxpacketsize.md): The meaning of this value depends on whether this is called with GetPipePropertiesV3 or GetEndpointPropertiesV3. See the documentation of those calls for more info.
