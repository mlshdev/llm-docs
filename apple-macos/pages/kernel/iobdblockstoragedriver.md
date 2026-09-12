> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdblockstoragedriver](https://developer.apple.com/documentation/kernel/iobdblockstoragedriver)

# IOBDBlockStorageDriver

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.5+

## Declaration

```objectivec
class IOBDBlockStorageDriver : IODVDBlockStorageDriver
```

## Topics

### Instance Methods

- [acceptNewMedia](iobdblockstoragedriver/1393682-acceptnewmedia.md)
- [getDeviceTypeName](iobdblockstoragedriver/1393680-getdevicetypename.md)
- [getMetaClass](iobdblockstoragedriver/1393686-getmetaclass.md)
- [getProvider](iobdblockstoragedriver/1393688-getprovider.md)
- [instantiateDesiredMediaObject](iobdblockstoragedriver/1393693-instantiatedesiredmediaobject.md)
- [instantiateMediaObject](iobdblockstoragedriver/1393699-instantiatemediaobject.md)
- [readStructure](iobdblockstoragedriver/1393697-readstructure.md)
- [splitTrack](iobdblockstoragedriver/1393695-splittrack.md)

## Relationships

### Inherits From

- [IODVDBlockStorageDriver](iodvdblockstoragedriver.md)

## See Also

### Drivers

- [IODVDBlockStorageDriver](iodvdblockstoragedriver.md)
- [IOCDBlockStorageDriver](iocdblockstoragedriver.md)
- [IOBlockStorageDriver](ioblockstoragedriver.md): The common base class for generic block storage drivers.
- [IOStorage](iostorage.md): The common base class for mass storage objects.
