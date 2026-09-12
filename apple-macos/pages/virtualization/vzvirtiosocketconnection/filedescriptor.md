> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketconnection/filedescriptor](https://developer.apple.com/documentation/virtualization/vzvirtiosocketconnection/filedescriptor)

# fileDescriptor (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file descriptor to use when sending data.

## Declaration

```swift
var fileDescriptor: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

To send data to the other side of the connection, write to the file descriptor. To read data from connection, read from the file descriptor. If the socket connection is closed, the value of this property is `-1`.

## See Also

### Getting the connection details

- [sourcePort](sourceport.md): The port number of the system that opened the connection.
- [destinationPort](destinationport.md): The destination port number of the connection.

# fileDescriptor (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file descriptor to use when sending data.

## Declaration

```objectivec
@property (readonly) int fileDescriptor;
```

<a id="Discussion"></a>

## Discussion

To send data to the other side of the connection, write to the file descriptor. To read data from connection, read from the file descriptor. If the socket connection is closed, the value of this property is `-1`.

## See Also

### Getting the connection details

- [sourcePort](sourceport.md): The port number of the system that opened the connection.
- [destinationPort](destinationport.md): The destination port number of the connection.
