> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdblockstoragedriver](https://developer.apple.com/documentation/kernel/iodvdblockstoragedriver)

# IODVDBlockStorageDriver

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.0+

## Declaration

```objectivec
class IODVDBlockStorageDriver : IOCDBlockStorageDriver
```

## Topics

### Instance Methods

- [acceptNewMedia](iodvdblockstoragedriver/1476007-acceptnewmedia.md)
- [getDeviceTypeName](iodvdblockstoragedriver/1476019-getdevicetypename.md)
- [getMetaClass](iodvdblockstoragedriver/1476012-getmetaclass.md)
- [getProvider](iodvdblockstoragedriver/1476029-getprovider.md)
- [instantiateDesiredMediaObject](iodvdblockstoragedriver/1476033-instantiatedesiredmediaobject.md)
- [instantiateMediaObject](iodvdblockstoragedriver/1476022-instantiatemediaobject.md)
- [readStructure](iodvdblockstoragedriver/1476024-readstructure.md)
- [reportKey](iodvdblockstoragedriver/4520034-reportkey.md): Deprecated.
- [reportKey](iodvdblockstoragedriver/4520035-reportkey.md)
- [sendKey](iodvdblockstoragedriver/1476015-sendkey.md)

## Relationships

### Inherits From

- [IOCDBlockStorageDriver](iocdblockstoragedriver.md)

## See Also

### Drivers

- [IOBDBlockStorageDriver](iobdblockstoragedriver.md)
- [IOCDBlockStorageDriver](iocdblockstoragedriver.md)
- [IOBlockStorageDriver](ioblockstoragedriver.md): The common base class for generic block storage drivers.
- [IOStorage](iostorage.md): The common base class for mass storage objects.
