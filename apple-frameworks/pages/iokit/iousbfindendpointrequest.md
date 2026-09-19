> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbfindendpointrequest

# IOUSBFindEndpointRequest

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBFindEndpointRequest {
    ...
} IOUSBFindEndpointRequest;
```

<a id="overview"></a>

## Overview

Struct used to find endpoints of an interface type and direction are used to match endpoints, type, direction, maxPacketSize and interval are updated with the properties of the found endpoint.

## Topics

### Instance Properties

- [direction](iousbfindendpointrequest/1425844-direction.md)
- [interval](iousbfindendpointrequest/1426086-interval.md)
- [maxPacketSize](iousbfindendpointrequest/1425860-maxpacketsize.md)
- [type](iousbfindendpointrequest/1425464-type.md)
