> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsunaryfilesystem](https://developer.apple.com/documentation/fskit/fsunaryfilesystem)

# FSUnaryFileSystem (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An abstract base class for implementing a minimal file system.

## Declaration

```swift
class FSUnaryFileSystem
```

<a id="overview"></a>

## Overview

`FSUnaryFileSystem` is a simplified file system, which works with one [FSResource](fsresource.md) and presents it as one [FSVolume](fsvolume.md).

The one volume and its container have a shared state and lifetime, a more constrained life cycle than the [FSFileSystem](fsfilesystem.md) design flow.

Implement your app extension by providing a subclass of `FSUnaryFileSystem` as a delegate object. Your delegate also needs to implement the [FSUnaryFileSystemOperations](fsunaryfilesystemoperations.md) protocol so that it can load resources.

## Topics

### Implementing operations

- [FSUnaryFileSystemOperations](fsunaryfilesystemoperations.md): Operations performed by a unary file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FSFileSystemBase](fsfilesystembase.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### File systems

- [FSFileSystemBase](fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

# FSUnaryFileSystem (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An abstract base class for implementing a minimal file system.

## Declaration

```objectivec
@interface FSUnaryFileSystem : NSObject
```

<a id="overview"></a>

## Overview

`FSUnaryFileSystem` is a simplified file system, which works with one [FSResource](fsresource.md) and presents it as one [FSVolume](fsvolume.md).

The one volume and its container have a shared state and lifetime, a more constrained life cycle than the [FSFileSystem](fsfilesystem.md) design flow.

Implement your app extension by providing a subclass of `FSUnaryFileSystem` as a delegate object. Your delegate also needs to implement the [FSUnaryFileSystemOperations](fsunaryfilesystemoperations.md) protocol so that it can load resources.

## Topics

### Implementing operations

- [FSUnaryFileSystemOperations](fsunaryfilesystemoperations.md): Operations performed by a unary file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [FSFileSystemBase](fsfilesystembase.md)

## See Also

### File systems

- [FSFileSystem](fsfilesystem.md): An abstract base class for implementing a full-featured file system.
- [FSFileSystemBase](fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
