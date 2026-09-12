> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilesystem](https://developer.apple.com/documentation/fskit/fsfilesystem)

# FSFileSystem

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Class

An abstract base class for implementing a full-featured file system.

## Declaration

```objectivec
@interface FSFileSystem : NSObject
```

<a id="overview"></a>

## Overview

`FSFileSystem` is a full-featured file system, which works with one or more [FSResource](fsresource.md) instances and presents one or more [FSVolume](fsvolume.md) references to callers.

Implement your app extension by providing a subclass of `FSFileSystem` as a delegate object. Your delegate also needs to implement the `FSFileSystemOperations` protocol so that it can probe, load, and unload resources.

> **Note**

> The current version of FSKit supports only [FSUnaryFileSystem](fsunaryfilesystem.md), not `FSFileSystem`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [FSFileSystemBase](fsfilesystembase.md)

## See Also

### File systems

- [FSUnaryFileSystem](fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileSystemBase](fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
