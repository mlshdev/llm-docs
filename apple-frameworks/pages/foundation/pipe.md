> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/pipe](https://developer.apple.com/documentation/foundation/pipe)

# Pipe (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A one-way communications channel between related processes.

## Declaration

```swift
class Pipe
```

<a id="overview"></a>

## Overview

[Pipe](pipe.md) objects provide an object-oriented interface for accessing pipes. An [Pipe](pipe.md) object represents both ends of a pipe and enables communication through the pipe. A pipe is a one-way communications channel between related processes; one process writes data, while the other process reads that data. The data that passes through the pipe is buffered; the size of the buffer is determined by the underlying operating system. [Pipe](pipe.md) is an abstract class, the public interface of a class cluster.

## Topics

### Getting the File Handles for a Pipe

- [fileHandleForReading](pipe/filehandleforreading.md): The receiver’s read file handle.
- [fileHandleForWriting](pipe/filehandleforwriting.md): The receiver’s write file handle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tasks and Pipes

- [Process](process.md): An object that represents a subprocess of the current process.

# NSPipe (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A one-way communications channel between related processes.

## Declaration

```objectivec
@interface NSPipe : NSObject
```

<a id="overview"></a>

## Overview

[NSPipe](pipe.md) objects provide an object-oriented interface for accessing pipes. An [NSPipe](pipe.md) object represents both ends of a pipe and enables communication through the pipe. A pipe is a one-way communications channel between related processes; one process writes data, while the other process reads that data. The data that passes through the pipe is buffered; the size of the buffer is determined by the underlying operating system. [NSPipe](pipe.md) is an abstract class, the public interface of a class cluster.

## Topics

### Creating an NSPipe Object

- [pipe](nspipe/pipe.md): Returns an `NSPipe` object.

### Getting the File Handles for a Pipe

- [fileHandleForReading](pipe/filehandleforreading.md): The receiver’s read file handle.
- [fileHandleForWriting](pipe/filehandleforwriting.md): The receiver’s write file handle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Tasks and Pipes

- [NSTask](process.md): An object that represents a subprocess of the current process.
