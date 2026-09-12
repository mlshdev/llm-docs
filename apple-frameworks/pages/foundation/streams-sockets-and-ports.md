> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streams-sockets-and-ports](https://developer.apple.com/documentation/foundation/streams-sockets-and-ports)

# Streams, Sockets, and Ports (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Use low-level Unix features to manage input and output among files, processes, and the network.

## Topics

### Streams

- [Stream](stream.md): An abstract class representing a stream.
- [InputStream](inputstream.md): A stream that provides read-only stream functionality.
- [OutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [StreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.

### Tasks and Pipes

- [Process](process.md): An object that represents a subprocess of the current process.
- [Pipe](pipe.md): A one-way communications channel between related processes.

### Sockets

- [Host](host.md): Deprecated. A representation of an individual host on the network.
- [Port](port.md): An abstract class that represents a communication channel.
- [SocketPort](socketport.md): A port that represents a BSD socket.

### Byte Ordering

- [Byte Order Utilities](byte-order-utilities.md): Examine and manage the byte order of numbers communicated through network channels.

## See Also

### Low-Level Utilities

- [XPC](xpc.md): Manage secure interprocess communication.
- [Object Runtime](object-runtime.md): Get low-level support for basic Objective-C features, Cocoa design patterns, and Swift integration.
- [Processes and Threads](processes-and-threads.md): Manage your app’s interaction with the host operating system and other processes, and implement low-level concurrency features.

# Streams, Sockets, and Ports (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Use low-level Unix features to manage input and output among files, processes, and the network.

## Topics

### Streams

- [NSStream](stream.md): An abstract class representing a stream.
- [NSInputStream](inputstream.md): A stream that provides read-only stream functionality.
- [NSOutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [NSStreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.

### Tasks and Pipes

- [NSTask](process.md): An object that represents a subprocess of the current process.
- [NSPipe](pipe.md): A one-way communications channel between related processes.

### Sockets

- [NSHost](host.md): Deprecated. A representation of an individual host on the network.
- [NSPort](port.md): An abstract class that represents a communication channel.
- [NSSocketPort](socketport.md): A port that represents a BSD socket.

### Byte Ordering

- [Byte Order Utilities](byte-order-utilities.md): Examine and manage the byte order of numbers communicated through network channels.

## See Also

### Low-Level Utilities

- [XPC](xpc.md): Manage secure interprocess communication.
- [Object Runtime](object-runtime.md): Get low-level support for basic Objective-C features, Cocoa design patterns, and Swift integration.
- [Processes and Threads](processes-and-threads.md): Manage your app’s interaction with the host operating system and other processes, and implement low-level concurrency features.
