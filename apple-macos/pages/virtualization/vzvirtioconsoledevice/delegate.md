> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevice/delegate](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevice/delegate)

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The delegate object for the console device.

## Declaration

```swift
weak var delegate: (any VZVirtioConsoleDeviceDelegate)? { get set }
```

## See Also

### Configuring the console

- [ports](ports.md): The array of console ports that a specific device uses.
- [VZVirtioConsoleDeviceDelegate](../vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The delegate object for the console device.

## Declaration

```objectivec
@property (weak, nullable) id<VZVirtioConsoleDeviceDelegate> delegate;
```

## See Also

### Configuring the console

- [ports](ports.md): The array of console ports that a specific device uses.
- [VZVirtioConsoleDeviceDelegate](../vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.
