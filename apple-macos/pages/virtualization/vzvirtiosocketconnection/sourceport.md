> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketconnection/sourceport](https://developer.apple.com/documentation/virtualization/vzvirtiosocketconnection/sourceport)

# sourcePort (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The port number of the system that opened the connection.

## Declaration

```swift
var sourcePort: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

When the guest operating system opens a connection, this property contains the port number that the guest specified. When you open a connection to the guest operating system from your [VZVirtioSocketDevice](../vzvirtiosocketdevice.md) object, this property contains a randomly generated port number.

## See Also

### Getting the connection details

- [destinationPort](destinationport.md): The destination port number of the connection.
- [fileDescriptor](filedescriptor.md): The file descriptor to use when sending data.

# sourcePort (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The port number of the system that opened the connection.

## Declaration

```objectivec
@property (readonly) uint32_t sourcePort;
```

<a id="Discussion"></a>

## Discussion

When the guest operating system opens a connection, this property contains the port number that the guest specified. When you open a connection to the guest operating system from your [VZVirtioSocketDevice](../vzvirtiosocketdevice.md) object, this property contains a randomly generated port number.

## See Also

### Getting the connection details

- [destinationPort](destinationport.md): The destination port number of the connection.
- [fileDescriptor](filedescriptor.md): The file descriptor to use when sending data.
