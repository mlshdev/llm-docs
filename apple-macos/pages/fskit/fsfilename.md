> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename](https://developer.apple.com/documentation/fskit/fsfilename)

# FSFileName (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

The name of a file, expressed as a data buffer.

## Declaration

```swift
class FSFileName
```

<a id="overview"></a>

## Overview

`FSFileName` is the class that carries filenames from the kernel to `FSModule` instances, and carries names back to the kernel as part of directory enumeration.

A filename is usually a valid UTF-8 sequence, but can be an arbitrary byte sequence that doesn’t conform to that format. As a result, the [data](fsfilename/data.md) property always contains a value, but the [string](fsfilename/string.md) property may be empty. An `FSModule` can receive an `FSFileName` that isn’t valid UTF-8 in two cases:

1. A program passes erroneous data to a system call. The `FSModule` treats this situation as an error.
2. An `FSModule` lacks the character encoding used for a file name. This situation occurs because some file system formats consider a filename to be an arbitrary “bag of bytes,” and leave character encoding up to the operating system. Without encoding information, the `FSModule` can only pass back the names it finds on disk. In this case, the behavior of upper layers such as [FileManager](https://developer.apple.com/documentation/foundation/filemanager) is unspecified. However, the `FSModule` must support looking up such names and using them as the source name of rename operations. The `FSModule` must also be able to support filenames that are derivatives of filenames returned from directory enumeration. Derivative filenames include Apple Double filenames (`"._Name"`), and editor backup filenames.

> **Important**

> Don’t subclass this class.

## Topics

### Creating a filename

- [init(bytes:)](fsfilename/init%28bytes_%29.md)
- [init(cString:)](fsfilename/init%28cstring_%29.md)
- [init(data:)](fsfilename/init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [init(string:)](fsfilename/init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.

### Accessing filename properties

- [data](fsfilename/data.md): The byte sequence of the filename, as a data object.
- [string](fsfilename/string.md): The filename, represented as a Unicode string.
- [debugDescription](fsfilename/debugdescription.md): The filename, represented as a potentially lossy conversion to a string.

### Initializers

- [init(coder:)](fsfilename/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### File systems

- [FSUnaryFileSystem](fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileSystemBase](fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.

# FSFileName (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

The name of a file, expressed as a data buffer.

## Declaration

```objectivec
@interface FSFileName : NSObject
```

<a id="overview"></a>

## Overview

`FSFileName` is the class that carries filenames from the kernel to `FSModule` instances, and carries names back to the kernel as part of directory enumeration.

A filename is usually a valid UTF-8 sequence, but can be an arbitrary byte sequence that doesn’t conform to that format. As a result, the [data](fsfilename/data.md) property always contains a value, but the [string](fsfilename/string.md) property may be empty. An `FSModule` can receive an `FSFileName` that isn’t valid UTF-8 in two cases:

1. A program passes erroneous data to a system call. The `FSModule` treats this situation as an error.
2. An `FSModule` lacks the character encoding used for a file name. This situation occurs because some file system formats consider a filename to be an arbitrary “bag of bytes,” and leave character encoding up to the operating system. Without encoding information, the `FSModule` can only pass back the names it finds on disk. In this case, the behavior of upper layers such as [NSFileManager](https://developer.apple.com/documentation/foundation/filemanager) is unspecified. However, the `FSModule` must support looking up such names and using them as the source name of rename operations. The `FSModule` must also be able to support filenames that are derivatives of filenames returned from directory enumeration. Derivative filenames include Apple Double filenames (`"._Name"`), and editor backup filenames.

> **Important**

> Don’t subclass this class.

## Topics

### Creating a filename

- [initWithBytes:length:](fsfilename/initwithbytes_length_.md): Initializes a file name by copying a character sequence from a byte array.
- [nameWithBytes:length:](fsfilename/namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [initWithCString:](fsfilename/initwithcstring_.md): Initializes a filename from a null-terminated character sequence.
- [nameWithCString:](fsfilename/namewithcstring_.md): Creates a filename from a null-terminated character sequence.
- [initWithData:](fsfilename/init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [nameWithData:](fsfilename/namewithdata_.md): Creates a filename by copying a character sequence data object.
- [initWithString:](fsfilename/init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
- [nameWithString:](fsfilename/namewithstring_.md): Creates a filename by copying a character sequence from a string instance.

### Accessing filename properties

- [data](fsfilename/data.md): The byte sequence of the filename, as a data object.
- [string](fsfilename/string.md): The filename, represented as a Unicode string.
- [debugDescription](fsfilename/debugdescription.md): The filename, represented as a potentially lossy conversion to a string.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### File systems

- [FSFileSystem](fsfilesystem.md): An abstract base class for implementing a full-featured file system.
- [FSUnaryFileSystem](fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileSystemBase](fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
