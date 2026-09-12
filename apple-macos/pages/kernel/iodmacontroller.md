> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacontroller](https://developer.apple.com/documentation/kernel/iodmacontroller)

# IODMAController

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.5+

## Declaration

```objectivec
class IODMAController : IOService
```

## Topics

### Instance Methods

- [completeDMACommand](iodmacontroller/1485785-completedmacommand.md)
- [getFIFODepth](iodmacontroller/1485751-getfifodepth.md)
- [getMetaClass](iodmacontroller/1485759-getmetaclass.md)
- [initDMAChannel](iodmacontroller/1485777-initdmachannel.md)
- [notifyDMACommand](iodmacontroller/1485771-notifydmacommand.md)
- [queryDMACommand](iodmacontroller/1485736-querydmacommand.md)
- [registerDMAController](iodmacontroller/1485748-registerdmacontroller.md)
- [setDMAConfig](iodmacontroller/1485745-setdmaconfig.md)
- [setFIFODepth](iodmacontroller/1485781-setfifodepth.md)
- [setFrameSize](iodmacontroller/1485762-setframesize.md)
- [start](iodmacontroller/1485768-start.md)
- [startDMACommand](iodmacontroller/1485740-startdmacommand.md)
- [stopDMACommand](iodmacontroller/1485756-stopdmacommand.md)
- [validDMAConfig](iodmacontroller/1485732-validdmaconfig.md)
- [validFIFODepth](iodmacontroller/1485765-validfifodepth.md)

### Type Methods

- [createControllerName](iodmacontroller/1485788-createcontrollername.md)
- [getController](iodmacontroller/1485754-getcontroller.md)

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Direct Memory Access (DMA)

- [IODMACommand](iodmacommand.md): An object that converts memory references to I/O bus addresses.
- [IODMAEventSource](iodmaeventsource.md)
