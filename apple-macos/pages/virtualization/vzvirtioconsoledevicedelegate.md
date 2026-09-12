> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevicedelegate](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevicedelegate)

# VZVirtioConsoleDeviceDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 13.0+

Optional methods that you use to respond when a console port opens or closes in the virtual machine.

## Declaration

```swift
protocol VZVirtioConsoleDeviceDelegate : NSObjectProtocol
```

## Topics

### Responding to console device changes

- [consoleDevice(\_:didOpen:)](vzvirtioconsoledevicedelegate/consoledevice%28__didopen_%29.md): Tells the delegate that the framework opened a console port.
- [consoleDevice(\_:didClose:)](vzvirtioconsoledevicedelegate/consoledevice%28__didclose_%29.md): Tells the delegate that the framework closed a console port.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.
- [VZVirtioConsolePort](vzvirtioconsoleport.md): A class that represents a Virtio console port in a VM.

### Configuring the console

- [ports](vzvirtioconsoledevice/ports.md): The array of console ports that a specific device uses.
- [delegate](vzvirtioconsoledevice/delegate.md): The delegate object for the console device.

# VZVirtioConsoleDeviceDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 13.0+

Optional methods that you use to respond when a console port opens or closes in the virtual machine.

## Declaration

```objectivec
@protocol VZVirtioConsoleDeviceDelegate <NSObject>
```

## Topics

### Responding to console device changes

- [consoleDevice:didOpenPort:](vzvirtioconsoledevicedelegate/consoledevice%28__didopen_%29.md): Tells the delegate that the framework opened a console port.
- [consoleDevice:didClosePort:](vzvirtioconsoledevicedelegate/consoledevice%28__didclose_%29.md): Tells the delegate that the framework closed a console port.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.
- [VZVirtioConsolePort](vzvirtioconsoleport.md): A class that represents a Virtio console port in a VM.

### Configuring the console

- [ports](vzvirtioconsoledevice/ports.md): The array of console ports that a specific device uses.
- [delegate](vzvirtioconsoledevice/delegate.md): The delegate object for the console device.
