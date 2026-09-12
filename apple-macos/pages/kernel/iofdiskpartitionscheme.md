> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofdiskpartitionscheme](https://developer.apple.com/documentation/kernel/iofdiskpartitionscheme)

# IOFDiskPartitionScheme

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.6+

## Declaration

```objectivec
class IOFDiskPartitionScheme : IOPartitionScheme
```

## Topics

### Instance Methods

- [free](iofdiskpartitionscheme/1405034-free.md)
- [getMetaClass](iofdiskpartitionscheme/1405017-getmetaclass.md)
- [init](iofdiskpartitionscheme/1405008-init.md)
- [instantiateDesiredMediaObject](iofdiskpartitionscheme/1405073-instantiatedesiredmediaobject.md)
- [instantiateMediaObject](iofdiskpartitionscheme/1404991-instantiatemediaobject.md)
- [isPartitionCorrupt](iofdiskpartitionscheme/1405012-ispartitioncorrupt.md)
- [isPartitionExtended](iofdiskpartitionscheme/1405064-ispartitionextended.md)
- [isPartitionInvalid](iofdiskpartitionscheme/1405062-ispartitioninvalid.md)
- [isPartitionUsed](iofdiskpartitionscheme/1405000-ispartitionused.md)
- [probe](iofdiskpartitionscheme/1405006-probe.md)
- [requestProbe](iofdiskpartitionscheme/1405002-requestprobe.md)
- [scan](iofdiskpartitionscheme/1404973-scan.md)
- [start](iofdiskpartitionscheme/1405030-start.md)
- [stop](iofdiskpartitionscheme/1404983-stop.md)

## Relationships

### Inherits From

- [IOPartitionScheme](iopartitionscheme.md)

## See Also

### Schemes

- [IOAppleLabelScheme](ioapplelabelscheme.md)
- [IOApplePartitionScheme](ioapplepartitionscheme.md)
- [IOGUIDPartitionScheme](ioguidpartitionscheme.md)
- [IOPartitionScheme](iopartitionscheme.md): The common base class for all partition scheme objects.
- [IOFilterScheme](iofilterscheme.md): The common base class for all filter scheme objects.
