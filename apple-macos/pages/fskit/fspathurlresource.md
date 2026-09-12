> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fspathurlresource](https://developer.apple.com/documentation/fskit/fspathurlresource)

# FSPathURLResource (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A resource that represents a path in the system file space.

## Declaration

```swift
class FSPathURLResource
```

<a id="overview"></a>

## Overview

The URL passed to `FSPathURLResource` may be a security-scoped URL. If the URL is a security-scoped URL, FSKit transports it intact from a client application to your extension.

## Topics

### Creating a path URL resource

- [init(url:writable:)](fspathurlresource/init%28url_writable_%29-2l10q.md): Creates a path URL resource.

### Accessing resource properties

- [url](fspathurlresource/url.md): The URL represented by the resource.
- [isWritable](fspathurlresource/iswritable.md): A Boolean value that indicates whether the file system supports writing to the contents of the path URL.

### Initializers

- [init(URL:writable:)](fspathurlresource/init%28url_writable_%29-52fco.md)

## Relationships

### Inherits From

- [FSResource](fsresource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Resources

- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSBlockDeviceResource](fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.

# FSPathURLResource (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A resource that represents a path in the system file space.

## Declaration

```objectivec
@interface FSPathURLResource : FSResource
```

<a id="overview"></a>

## Overview

The URL passed to `FSPathURLResource` may be a security-scoped URL. If the URL is a security-scoped URL, FSKit transports it intact from a client application to your extension.

## Topics

### Creating a path URL resource

- [initWithURL:writable:](fspathurlresource/init%28url_writable_%29-2l10q.md): Creates a path URL resource.

### Accessing resource properties

- [url](fspathurlresource/url.md): The URL represented by the resource.
- [writable](fspathurlresource/iswritable.md): A Boolean value that indicates whether the file system supports writing to the contents of the path URL.

## Relationships

### Inherits From

- [FSResource](fsresource.md)

## See Also

### Resources

- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSBlockDeviceResource](fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.
