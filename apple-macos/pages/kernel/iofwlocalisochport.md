> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwlocalisochport](https://developer.apple.com/documentation/kernel/iofwlocalisochport)

# IOFWLocalIsochPort

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.0+

## Declaration

```objectivec
class IOFWLocalIsochPort : IOFWIsochPort
```

## Topics

### Miscellaneous

- [notify](iofwlocalisochport/1812964-notify.md): Informs hardware of a change to the DCL program.

### DataTypes

- [ExpansionData](ioservice/expansiondata.md)

### Instance Methods

- [allocatePort](iofwlocalisochport/1521417-allocateport.md)
- [free](iofwlocalisochport/1521418-free.md)
- [getMetaClass](iofwlocalisochport/1521421-getmetaclass.md)
- [getProgramRef](iofwlocalisochport/1521420-getprogramref.md)
- [getSupported](iofwlocalisochport/1521424-getsupported.md)
- [init](iofwlocalisochport/1521425-init.md)
- [notify](iofwlocalisochport/1521429-notify.md)
- [releasePort](iofwlocalisochport/1521434-releaseport.md)
- [setIsochResourceFlags](iofwlocalisochport/1521437-setisochresourceflags.md)
- [start](iofwlocalisochport/1521435-start.md)
- [stop](iofwlocalisochport/1521427-stop.md)
- [synchronizeWithIO](iofwlocalisochport/1521422-synchronizewithio.md)

### Type Methods

- [printDCLProgram](iofwlocalisochport/1521431-printdclprogram.md)

## Relationships

### Inherits From

- [IOFWIsochPort](iofwisochport.md)

## See Also

### FireWire Types

- [UCInfo](ucinfo.md)
- [IOLocalConfigDirectory](iolocalconfigdirectory.md)
- [IOConfigDirectory](ioconfigdirectory.md)
- [IOFireWireDuplicateGUIDList](iofirewireduplicateguidlist.md)
- [IOFireWireIRMAllocation](iofirewireirmallocation.md)
- [IOFireWireMultiIsochReceiveListener](iofirewiremultiisochreceivelistener.md)
- [IOFWPHYPacketListener](iofwphypacketlistener.md)
- [IOFireWireMultiIsochReceivePacket](iofirewiremultiisochreceivepacket.md)
- [IOFireWirePowerManager](iofirewirepowermanager.md)
- [IOFWIsochChannel](iofwisochchannel.md)
- [IOFWIsochPort](iofwisochport.md)
- [IOFWSyncer](iofwsyncer.md)
- [IOFWUserObjectExporter](iofwuserobjectexporter.md)
