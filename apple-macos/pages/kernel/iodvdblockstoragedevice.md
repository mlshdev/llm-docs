> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdblockstoragedevice](https://developer.apple.com/documentation/kernel/iodvdblockstoragedevice)

# IODVDBlockStorageDevice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.6+

The IODVDBlockStorageDevice class is a generic DVD block storage device abstraction.

## Declaration

```objectivec
class IODVDBlockStorageDevice : IOCDBlockStorageDevice
```

<a id="overview"></a>

## Overview

This class is the protocol for generic DVD functionality, independent of the physical connection protocol (e.g. SCSI, ATA, USB).

The APIs are the union of CD APIs and all necessary new low-level DVD APIs.

A subclass implements relay methods that translate our requests into calls to a protocol- and device-specific provider.

## Topics

### Instance Methods

- [getMetaClass](iodvdblockstoragedevice/1534834-getmetaclass.md)
- [init](iodvdblockstoragedevice/1534832-init.md)
- [readDVDStructure](iodvdblockstoragedevice/1534827-readdvdstructure.md)
- [reportKey](iodvdblockstoragedevice/4520032-reportkey.md): Deprecated.
- [reportKey](iodvdblockstoragedevice/4520033-reportkey.md)
- [sendKey](iodvdblockstoragedevice/1534829-sendkey.md)

## Relationships

### Inherits From

- [IOCDBlockStorageDevice](iocdblockstoragedevice.md)

## See Also

### Interfaces

- [IODVDServices](iodvdservices.md)
- [IOBDBlockStorageDevice](iobdblockstoragedevice.md): The IOBDBlockStorageDevice class is a generic BD block storage device abstraction.
- [IOCompactDiscServices](iocompactdiscservices.md)
- [IOBDMediaBSDClient](iobdmediabsdclient.md)
- [IOMediaBSDClient](iomediabsdclient.md)
