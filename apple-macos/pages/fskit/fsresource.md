> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsresource](https://developer.apple.com/documentation/fskit/fsresource)

# FSResource (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An abstract resource a file system uses to provide data for a volume.

## Declaration

```swift
class FSResource
```

<a id="overview"></a>

## Overview

`FSResource` is a base class to represent the various possible sources of data for a file system. These range from dedicated storage devices like hard drives and flash storage to network connections, and beyond. Subclasses define behavior specific to a given kind of resource, such as [FSBlockDeviceResource](fsblockdeviceresource.md) for disk partition (IOMedia) file systems. These file systems are typical disk file systems such as HFS, APFS, ExFAT, ext2fs, or NTFS.

A resource’s type also determines its life cycle. Resources based on block storage devices come into being when the system probes the media underlying the volumes and container. Other kinds of resources, like those based on URLs, might have different life cycles. For example, a resource based on a `file://` URL might initialize when a person uses the “Connect to server” command in the macOS Finder.

<a id="Proxying-resources"></a>

### Proxying resources

Some resources, like [FSBlockDeviceResource](fsblockdeviceresource.md), come in proxy and non-proxy variants. This addresses the issue that opening an external device like `/dev/disk2s1` requires an entitlement. Proxy resources allow unentitled clients of FSKit to describe which disk an [FSBlockDeviceResource](fsblockdeviceresource.md) should represent. This allows, for example, the `mount(8)` tool to mount FSKit file systems on block devices when run as root. The tool uses a proxy when executing a command like `mount -t ffs /dev/disk2s1 /some/path`, which prevents leaking privileged resource access.

## Topics

### Creating proxies

- [makeProxy()](fsresource/makeproxy%28%29.md): Creates a proxy object of this resource.

### Revoking the resource

- [revoke()](fsresource/revoke%28%29.md): Revokes the resource.
- [isRevoked](fsresource/isrevoked.md): A Boolean value that indicates whether the resource is revoked.

### Initializers

- [init(coder:)](fsresource/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSBlockDeviceResource](fsblockdeviceresource.md)
- [FSGenericURLResource](fsgenericurlresource.md)
- [FSPathURLResource](fspathurlresource.md)

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

- [FSBlockDeviceResource](fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.

# FSResource (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An abstract resource a file system uses to provide data for a volume.

## Declaration

```objectivec
@interface FSResource : NSObject
```

<a id="overview"></a>

## Overview

`FSResource` is a base class to represent the various possible sources of data for a file system. These range from dedicated storage devices like hard drives and flash storage to network connections, and beyond. Subclasses define behavior specific to a given kind of resource, such as [FSBlockDeviceResource](fsblockdeviceresource.md) for disk partition (IOMedia) file systems. These file systems are typical disk file systems such as HFS, APFS, ExFAT, ext2fs, or NTFS.

A resource’s type also determines its life cycle. Resources based on block storage devices come into being when the system probes the media underlying the volumes and container. Other kinds of resources, like those based on URLs, might have different life cycles. For example, a resource based on a `file://` URL might initialize when a person uses the “Connect to server” command in the macOS Finder.

<a id="Proxying-resources"></a>

### Proxying resources

Some resources, like [FSBlockDeviceResource](fsblockdeviceresource.md), come in proxy and non-proxy variants. This addresses the issue that opening an external device like `/dev/disk2s1` requires an entitlement. Proxy resources allow unentitled clients of FSKit to describe which disk an [FSBlockDeviceResource](fsblockdeviceresource.md) should represent. This allows, for example, the `mount(8)` tool to mount FSKit file systems on block devices when run as root. The tool uses a proxy when executing a command like `mount -t ffs /dev/disk2s1 /some/path`, which prevents leaking privileged resource access.

## Topics

### Creating proxies

- [makeProxy](fsresource/makeproxy%28%29.md): Creates a proxy object of this resource.

### Revoking the resource

- [revoke](fsresource/revoke%28%29.md): Revokes the resource.
- [revoked](fsresource/isrevoked.md): A Boolean value that indicates whether the resource is revoked.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSBlockDeviceResource](fsblockdeviceresource.md)
- [FSGenericURLResource](fsgenericurlresource.md)
- [FSPathURLResource](fspathurlresource.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Resources

- [FSBlockDeviceResource](fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.
