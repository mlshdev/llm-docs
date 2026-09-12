> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdevrequest](https://developer.apple.com/documentation/iokit/iousbdevrequest)

# IOUSBDevRequest

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBDevRequest {
    ...
} IOUSBDevRequest;
```

<a id="overview"></a>

## Overview

Parameter block for control requests, using a simple pointer for the data to be transferred.

## Topics

### Instance Properties

- [bRequest](iousbdevrequest/1425442-brequest.md)
- [bmRequestType](iousbdevrequest/1425959-bmrequesttype.md)
- [pData](iousbdevrequest/1425983-pdata.md)
- [wIndex](iousbdevrequest/1425343-windex.md)
- [wLenDone](iousbdevrequest/1425789-wlendone.md)
- [wLength](iousbdevrequest/1425950-wlength.md)
- [wValue](iousbdevrequest/1425618-wvalue.md)
