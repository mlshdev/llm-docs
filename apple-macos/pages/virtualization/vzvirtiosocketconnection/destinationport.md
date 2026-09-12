> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketconnection/destinationport](https://developer.apple.com/documentation/virtualization/vzvirtiosocketconnection/destinationport)

# destinationPort (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The destination port number of the connection.

## Declaration

```swift
var destinationPort: UInt32 { get }
```

## See Also

### Getting the connection details

- [sourcePort](sourceport.md): The port number of the system that opened the connection.
- [fileDescriptor](filedescriptor.md): The file descriptor to use when sending data.

# destinationPort (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The destination port number of the connection.

## Declaration

```objectivec
@property (readonly) uint32_t destinationPort;
```

## See Also

### Getting the connection details

- [sourcePort](sourceport.md): The port number of the system that opened the connection.
- [fileDescriptor](filedescriptor.md): The file descriptor to use when sending data.
