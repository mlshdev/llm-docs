> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevice/ports](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevice/ports)

# ports (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The array of console ports that a specific device uses.

## Declaration

```swift
var ports: VZVirtioConsolePortArray { get }
```

## See Also

### Configuring the console

- [delegate](delegate.md): The delegate object for the console device.
- [VZVirtioConsoleDeviceDelegate](../vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.

# ports (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The array of console ports that a specific device uses.

## Declaration

```objectivec
@property (strong, readonly) VZVirtioConsolePortArray * ports;
```

## See Also

### Configuring the console

- [delegate](delegate.md): The delegate object for the console device.
- [VZVirtioConsoleDeviceDelegate](../vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.
