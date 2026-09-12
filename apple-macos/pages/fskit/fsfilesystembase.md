> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilesystembase](https://developer.apple.com/documentation/fskit/fsfilesystembase)

# FSFileSystemBase (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

A protocol containing functionality supplied by FSKit to file system implementations.

## Declaration

```swift
protocol FSFileSystemBase : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Both [FSFileSystem](fsfilesystem.md) and [FSUnaryFileSystem](fsunaryfilesystem.md) conform to this protocol.

## Topics

### Implementing essential functionality

- [containerStatus](fsfilesystembase/containerstatus.md): The status of the file system container, indicating its readiness and activity.
- [wipe(\_:completionHandler:)](fsfilesystembase/wipe%28__completionhandler_%29.md): Wipes existing file systems on the specified resource.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [FSUnaryFileSystem](fsunaryfilesystem.md)

## See Also

### File systems

- [FSUnaryFileSystem](fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

# FSFileSystemBase (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

A protocol containing functionality supplied by FSKit to file system implementations.

## Declaration

```objectivec
@protocol FSFileSystemBase <NSObject>
```

<a id="overview"></a>

## Overview

Both [FSFileSystem](fsfilesystem.md) and [FSUnaryFileSystem](fsunaryfilesystem.md) conform to this protocol.

## Topics

### Implementing essential functionality

- [containerStatus](fsfilesystembase/containerstatus.md): The status of the file system container, indicating its readiness and activity.
- [wipeResource:completionHandler:](fsfilesystembase/wipe%28__completionhandler_%29.md): Wipes existing file systems on the specified resource.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [FSFileSystem](fsfilesystem.md)
- [FSUnaryFileSystem](fsunaryfilesystem.md)

## See Also

### File systems

- [FSFileSystem](fsfilesystem.md): An abstract base class for implementing a full-featured file system.
- [FSUnaryFileSystem](fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
