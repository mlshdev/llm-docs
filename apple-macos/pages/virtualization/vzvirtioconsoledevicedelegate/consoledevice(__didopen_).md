> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevicedelegate/consoledevice(_:didopen:)](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevicedelegate/consoledevice(_:didopen:))

# consoleDevice(\_:didOpen:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Tells the delegate that the framework opened a console port.

## Declaration

```swift
optional func consoleDevice(_ consoleDevice: VZVirtioConsoleDevice, didOpen consolePort: VZVirtioConsolePort)
```

## Parameters

- `consoleDevice`: The console port’s console device.
- `consolePort`: The [VZVirtioConsolePort](../vzvirtioconsoleport.md) port that the framework opened.

<a id="Discussion"></a>

## Discussion

Be sure to process or flush any pending data from the [VZVirtioConsolePort](../vzvirtioconsoleport.md) attachment before communicating with a new virtual machine process, or additional data might remain on the serial port from the previous session.

## See Also

### Responding to console device changes

- [consoleDevice(\_:didClose:)](consoledevice%28__didclose_%29.md): Tells the delegate that the framework closed a console port.

# consoleDevice:didOpenPort: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Tells the delegate that the framework opened a console port.

## Declaration

```objectivec
- (void) consoleDevice:(VZVirtioConsoleDevice *) consoleDevice didOpenPort:(VZVirtioConsolePort *) consolePort;
```

## Parameters

- `consoleDevice`: The console port’s console device.
- `consolePort`: The [VZVirtioConsolePort](../vzvirtioconsoleport.md) port that the framework opened.

<a id="Discussion"></a>

## Discussion

Be sure to process or flush any pending data from the [VZVirtioConsolePort](../vzvirtioconsoleport.md) attachment before communicating with a new virtual machine process, or additional data might remain on the serial port from the previous session.

## See Also

### Responding to console device changes

- [consoleDevice:didClosePort:](consoledevice%28__didclose_%29.md): Tells the delegate that the framework closed a console port.
