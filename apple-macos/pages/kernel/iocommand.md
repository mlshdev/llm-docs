> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommand](https://developer.apple.com/documentation/kernel/iocommand)

# IOCommand

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Class  
**Availability:** DriverKit 21.0+ · macOS 10.6+

This class is an abstract class which represents an I/O command.

## Declaration

```objectivec
class IOCommand : OSObject
```

<a id="overview"></a>

## Overview

This class is an abstract class which represents an I/O command passed from a device driver to a controller. All controller commands (e.g. IOATACommand) should inherit from this class.

## Topics

### Instance Variables

- [fCommandChain](iocommand/fcommandchain.md)

### Instance Methods

- [CommandChain](https://developer.apple.com/documentation/driverkit/iocommand/commandchain)
- [free](https://developer.apple.com/documentation/driverkit/iocommand/free)
- [getMetaClass](iocommand/1528522-getmetaclass.md)
- [init](iocommand/1528524-init.md)

### Type Methods

- [FromChain](https://developer.apple.com/documentation/driverkit/iocommand/fromchain)

## Relationships

### Inherits From

- [OSObject](https://developer.apple.com/documentation/driverkit/osobject)
- [OSObject](osobject.md)

## See Also

### Base Types

- [IOCommandPool](iocommandpool.md): Manipulates a pool of commands which inherit from IOCommand.
- [IOCommandGate](iocommandgate.md): Single-threaded work-loop client request mechanism.
- [IODispatchSource](iodispatchsource.md)
- [IOEventSource](ioeventsource.md): Abstract class for all work-loop event sources.
