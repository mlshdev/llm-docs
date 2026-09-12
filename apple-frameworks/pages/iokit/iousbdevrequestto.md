> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdevrequestto](https://developer.apple.com/documentation/iokit/iousbdevrequestto)

# IOUSBDevRequestTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

## Declaration

```objectivec
typedef struct IOUSBDevRequestTO {
    ...
} IOUSBDevRequestTO;
```

<a id="overview"></a>

## Overview

Parameter block for control requests with timeouts, using a simple pointer for the data to be transferred. Same as a IOUSBDevRequest except for the two extra timeout fields.

## Topics

### Instance Properties

- [bRequest](iousbdevrequestto/1425588-brequest.md)
- [bmRequestType](iousbdevrequestto/1425926-bmrequesttype.md)
- [completionTimeout](iousbdevrequestto/1425449-completiontimeout.md)
- [noDataTimeout](iousbdevrequestto/1425759-nodatatimeout.md)
- [pData](iousbdevrequestto/1425494-pdata.md)
- [wIndex](iousbdevrequestto/1426031-windex.md)
- [wLenDone](iousbdevrequestto/1425675-wlendone.md)
- [wLength](iousbdevrequestto/1426024-wlength.md)
- [wValue](iousbdevrequestto/1425335-wvalue.md)
