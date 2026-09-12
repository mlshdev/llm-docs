> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwdelaycommand](https://developer.apple.com/documentation/kernel/iofwdelaycommand)

# IOFWDelayCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.0+

Command to execute some code after a specified delay (in microseconds) All it does is timeout after the specified delay, hence calling the completion callback.

## Declaration

```objectivec
class IOFWDelayCommand : IOFWBusCommand
```

## Topics

### DataTypes

- [ExpansionData](ioservice/expansiondata.md)

### Instance Variables

- [reserved](iofwdelaycommand/reserved.md)

### Instance Methods

- [execute](iofwdelaycommand/1563818-execute.md)
- [getMetaClass](iofwdelaycommand/1563819-getmetaclass.md)
- [initWithDelay](iofwdelaycommand/1563783-initwithdelay.md)
- [reinit](iofwdelaycommand/1563823-reinit.md)

## Relationships

### Inherits From

- [IOFWBusCommand](iofwbuscommand.md)
