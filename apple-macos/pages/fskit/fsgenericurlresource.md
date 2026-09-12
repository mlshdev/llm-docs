> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsgenericurlresource](https://developer.apple.com/documentation/fskit/fsgenericurlresource)

# FSGenericURLResource (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A resource that represents an abstract URL.

## Declaration

```swift
class FSGenericURLResource
```

<a id="overview"></a>

## Overview

An `FSGenericURLResource` is a completely abstract resource. The only reference to its contents is a single URL, the contents of which are arbitrary. This URL might represent a PCI locator string like `/pci@f0000000/usb@5`, or some sort of network address for a remote file system. FSKit leaves interpretation of the URL and its contents entirely up to your implementation.

Use the `Info.plist` key `FSSupportedSchemes` to provide an array of case-insensitive URL schemes that your implementation supports. The following example shows how a hypothetical `FSGenericURLResource` implementation declares support for the `rsh` and `ssh` URL schemes:

```swift
<key>FSSupportedSchemes</key>
<array>
    <string>rsh</string>
    <string>ssh</string>
</array>
```

## Topics

### Creating a generic URL resource

- [init(url:)](fsgenericurlresource/init%28url_%29-2cmhi.md): Creates a generic URL resource with the given URL.

### Accessing resource properties

- [url](fsgenericurlresource/url.md): The URL represented by the resource.

### Initializers

- [init(URL:)](fsgenericurlresource/init%28url_%29-3957q.md)

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
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.

# FSGenericURLResource (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A resource that represents an abstract URL.

## Declaration

```objectivec
@interface FSGenericURLResource : FSResource
```

<a id="overview"></a>

## Overview

An `FSGenericURLResource` is a completely abstract resource. The only reference to its contents is a single URL, the contents of which are arbitrary. This URL might represent a PCI locator string like `/pci@f0000000/usb@5`, or some sort of network address for a remote file system. FSKit leaves interpretation of the URL and its contents entirely up to your implementation.

Use the `Info.plist` key `FSSupportedSchemes` to provide an array of case-insensitive URL schemes that your implementation supports. The following example shows how a hypothetical `FSGenericURLResource` implementation declares support for the `rsh` and `ssh` URL schemes:

```swift
<key>FSSupportedSchemes</key>
<array>
    <string>rsh</string>
    <string>ssh</string>
</array>
```

## Topics

### Creating a generic URL resource

- [initWithURL:](fsgenericurlresource/init%28url_%29-2cmhi.md): Creates a generic URL resource with the given URL.

### Accessing resource properties

- [url](fsgenericurlresource/url.md): The URL represented by the resource.

## Relationships

### Inherits From

- [FSResource](fsresource.md)

## See Also

### Resources

- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSBlockDeviceResource](fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.
