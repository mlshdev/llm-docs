> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/atapiclientdata](https://developer.apple.com/documentation/kernel/atapiclientdata)

# ATAPIClientData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef struct ATAPIClientData {
    ...
} ATAPIClientData;
```

<a id="overview"></a>

## Overview

This structure is stuffed into the refcon so we can associate which IOATACommand and SCSITaskIdentifier is completing.

## Topics

### Instance Properties

- [cmd](atapiclientdata/1550957-cmd.md): IOATACommand for request.
- [scsiTask](atapiclientdata/1550980-scsitask.md): SCSITaskIdentifier of request.
- [self](atapiclientdata/1550940-self.md): Pointer to the object.

## See Also

### ATAPI

- [IOATAPIProtocolTransport](ioatapiprotocoltransport.md): SCSI Protocol Driver Family for ATAPI Devices.
- [ATAPICmdPacket](atapicmdpacket.md)
