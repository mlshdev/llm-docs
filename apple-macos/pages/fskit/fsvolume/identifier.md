> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/identifier](https://developer.apple.com/documentation/fskit/fsvolume/identifier)

# FSVolume.Identifier (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that identifies a volume.

## Declaration

```swift
class Identifier
```

<a id="overview"></a>

## Overview

For most volumes, the volume identifier is the UUID identifying the volume.

Network file systems may access the same underlying volume using different authentication credentials. To handle this situation, add qualifying data to identify the specific container, as discussed in the superclass, [FSEntityIdentifier](../fsentityidentifier.md).

> **Important**

> Don’t subclass this class.

## Relationships

### Inherits From

- [FSEntityIdentifier](../fsentityidentifier.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a volume

- [init(volumeID:volumeName:)](init%28volumeid_volumename_%29.md): Creates a volume with the given identifier and name.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.

# FSVolumeIdentifier (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that identifies a volume.

## Declaration

```objectivec
@interface FSVolumeIdentifier : FSEntityIdentifier
```

<a id="overview"></a>

## Overview

For most volumes, the volume identifier is the UUID identifying the volume.

Network file systems may access the same underlying volume using different authentication credentials. To handle this situation, add qualifying data to identify the specific container, as discussed in the superclass, [FSEntityIdentifier](../fsentityidentifier.md).

> **Important**

> Don’t subclass this class.

## Relationships

### Inherits From

- [FSEntityIdentifier](../fsentityidentifier.md)

## See Also

### Creating a volume

- [initWithVolumeID:volumeName:](init%28volumeid_volumename_%29.md): Creates a volume with the given identifier and name.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
