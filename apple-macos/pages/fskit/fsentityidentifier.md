> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier](https://developer.apple.com/documentation/fskit/fsentityidentifier)

# FSEntityIdentifier (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A base type that identifies containers and volumes.

## Declaration

```swift
class FSEntityIdentifier
```

<a id="overview"></a>

## Overview

An [FSEntityIdentifier](fsentityidentifier.md) is a UUID to identify a container or volume, optionally with eight bytes of qualifying (differentiating) data. You use the qualifiers in cases in which a file server can receive multiple connections from the same client, which differ by user credentials. In this case, the identifier for each client is the server’s base UUID, and a unique qualifier that differs by client.

> **Important**

> Don’t subclass this class.

## Topics

### Creating an entity identifier

- [init()](fsentityidentifier/init%28%29.md): Creates an entity identifier with a random UUID.
- [init(uuid:)](fsentityidentifier/init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [init(uuid:data:)](fsentityidentifier/init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.
- [init(uuid:qualifier:)](fsentityidentifier/init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

### Inspecting identifier properties

- [uuid](fsentityidentifier/uuid.md): A UUID to uniquely identify this entity.
- [qualifier](fsentityidentifier/qualifier.md): An optional piece of data to distinguish entities that otherwise share the same UUID.

### Initializers

- [init(UUID:)](fsentityidentifier/init%28uuid_%29-1cibs.md)
- [init(UUID:data:)](fsentityidentifier/init%28uuid_data_%29-1cpve.md): Deprecated.
- [init(UUID:qualifier:)](fsentityidentifier/init%28uuid_qualifier_%29-x26c.md)
- [init(UUID:qualifierData:)](fsentityidentifier/init%28uuid_qualifierdata_%29-49874.md)
- [init(coder:)](fsentityidentifier/init%28coder_%29.md)
- [init(uuid:qualifierData:)](fsentityidentifier/init%28uuid_qualifierdata_%29-8xlg1.md): Creates an entity identifier with the given UUID and qualifier data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSContainerIdentifier](fscontaineridentifier.md)
- [FSVolume.Identifier](fsvolume/identifier.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSEntityIdentifier (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A base type that identifies containers and volumes.

## Declaration

```objectivec
@interface FSEntityIdentifier : NSObject
```

<a id="overview"></a>

## Overview

An [FSEntityIdentifier](fsentityidentifier.md) is a UUID to identify a container or volume, optionally with eight bytes of qualifying (differentiating) data. You use the qualifiers in cases in which a file server can receive multiple connections from the same client, which differ by user credentials. In this case, the identifier for each client is the server’s base UUID, and a unique qualifier that differs by client.

> **Important**

> Don’t subclass this class.

## Topics

### Creating an entity identifier

- [init](fsentityidentifier/init%28%29.md): Creates an entity identifier with a random UUID.
- [initWithUUID:](fsentityidentifier/init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [initWithUUID:data:](fsentityidentifier/init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.
- [initWithUUID:qualifier:](fsentityidentifier/init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

### Inspecting identifier properties

- [uuid](fsentityidentifier/uuid.md): A UUID to uniquely identify this entity.
- [qualifier](fsentityidentifier/qualifier.md): An optional piece of data to distinguish entities that otherwise share the same UUID.

### Instance Methods

- [initWithUUID:qualifierData:](fsentityidentifier/init%28uuid_qualifierdata_%29-8xlg1.md): Creates an entity identifier with the given UUID and qualifier data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSContainerIdentifier](fscontaineridentifier.md)
- [FSVolumeIdentifier](fsvolume/identifier.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
