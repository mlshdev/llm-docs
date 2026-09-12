> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice)

# PGDevice (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A paravirtualized GPU device object.

## Declaration

```swift
protocol PGDevice : NSObjectProtocol
```

## Topics

### Handling Memory-Mapped I/O

- [mmioRead(atOffset:)](pgdevice/mmioread%28atoffset_%29.md): Reads data from the virtual graphics device’s memory-mapped I/O region.
- [mmioWrite(atOffset:value:)](pgdevice/mmiowrite%28atoffset_value_%29.md): Writes data to the virtual graphics device’s memory-mapped I/O region.

### Suspending and Resuming Graphics Processing

- [willSuspend()](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend()](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResume(withSuspendState:error:)](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume()](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](pgresumeerrorcode.md): Error codes for suspend-resume actions.

### Managing Displays

- [newDisplay(with:port:serialNum:)](pgdevice/newdisplay%28with_port_serialnum_%29.md): Create a display from the specified descriptor and uniquifying parameters.

### Instance Methods

- [pause()](pgdevice/pause%28%29.md)
- [reset()](pgdevice/reset%28%29.md)
- [stop()](pgdevice/stop%28%29.md)
- [unpause()](pgdevice/unpause%28%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [PGDeviceDescriptor](pgdevicedescriptor.md): A description of the paravirtualized graphics device to create.

# PGDevice (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A paravirtualized GPU device object.

## Declaration

```objectivec
@protocol PGDevice <NSObject>
```

## Topics

### Handling Memory-Mapped I/O

- [mmioReadAtOffset:](pgdevice/mmioread%28atoffset_%29.md): Reads data from the virtual graphics device’s memory-mapped I/O region.
- [mmioWriteAtOffset:value:](pgdevice/mmiowrite%28atoffset_value_%29.md): Writes data to the virtual graphics device’s memory-mapped I/O region.

### Suspending and Resuming Graphics Processing

- [willSuspend](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResumeWithSuspendState:error:](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](pgresumeerrorcode.md): Error codes for suspend-resume actions.

### Managing Displays

- [newDisplayWithDescriptor:port:serialNum:](pgdevice/newdisplay%28with_port_serialnum_%29.md): Create a display from the specified descriptor and uniquifying parameters.

### Instance Methods

- [pause](pgdevice/pause%28%29.md)
- [reset](pgdevice/reset%28%29.md)
- [stop](pgdevice/stop%28%29.md)
- [unpause](pgdevice/unpause%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [PGDeviceDescriptor](pgdevicedescriptor.md): A description of the paravirtualized graphics device to create.
