> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevicedelegate/consoledevice(_:didclose:)](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevicedelegate/consoledevice(_:didclose:))

# consoleDevice(\_:didClose:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Tells the delegate that the framework closed a console port.

## Declaration

```swift
optional func consoleDevice(_ consoleDevice: VZVirtioConsoleDevice, didClose consolePort: VZVirtioConsolePort)
```

## Parameters

- `consoleDevice`: The console port’s console device.
- `consolePort`: The [VZVirtioConsolePort](../vzvirtioconsoleport.md) port that the framework closed.

<a id="Discussion"></a>

## Discussion

Be sure to finish processing or flushing any remaining data from the [VZVirtioConsolePort](../vzvirtioconsoleport.md) attachment after closing a port, or the additional data might remain on the serial port.

## See Also

### Responding to console device changes

- [consoleDevice(\_:didOpen:)](consoledevice%28__didopen_%29.md): Tells the delegate that the framework opened a console port.

# consoleDevice:didClosePort: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Tells the delegate that the framework closed a console port.

## Declaration

```objectivec
- (void) consoleDevice:(VZVirtioConsoleDevice *) consoleDevice didClosePort:(VZVirtioConsolePort *) consolePort;
```

## Parameters

- `consoleDevice`: The console port’s console device.
- `consolePort`: The [VZVirtioConsolePort](../vzvirtioconsoleport.md) port that the framework closed.

<a id="Discussion"></a>

## Discussion

Be sure to finish processing or flushing any remaining data from the [VZVirtioConsolePort](../vzvirtioconsoleport.md) attachment after closing a port, or the additional data might remain on the serial port.

## See Also

### Responding to console device changes

- [consoleDevice:didOpenPort:](consoledevice%28__didopen_%29.md): Tells the delegate that the framework opened a console port.
