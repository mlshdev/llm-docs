> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilesecurity](https://developer.apple.com/documentation/foundation/nsfilesecurity)

# NSFileSecurity (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stub class that encapsulates security information about a file.

## Declaration

```swift
class NSFileSecurity
```

<a id="overview"></a>

## Overview

[NSFileSecurity](nsfilesecurity.md) contains no methods of its own. Instead, it is transparently bridged to [CFFileSecurity](../corefoundation/cffilesecurity.md).

## Topics

### Initializers

- [init(coder:)](nsfilesecurity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Managed file access

- [FileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [FileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.

# NSFileSecurity (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stub class that encapsulates security information about a file.

## Declaration

```objectivec
@interface NSFileSecurity : NSObject
```

<a id="overview"></a>

## Overview

[NSFileSecurity](nsfilesecurity.md) contains no methods of its own. Instead, it is transparently bridged to [CFFileSecurityRef](../corefoundation/cffilesecurity.md).

## Topics

### Instance Methods

- [initWithCoder:](nsfilesecurity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Managed file access

- [NSFileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [NSFileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.
