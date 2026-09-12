> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsextentpacker](https://developer.apple.com/documentation/fskit/fsextentpacker)

# FSExtentPacker (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Declaration

```swift
class FSExtentPacker
```

<a id="overview"></a>

## Overview

*Extents* provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. Rather than working with extents directly, you use this type’s methods to provide or “pack” extent information, which FSKit then passes to the kernel.

## Topics

### Packing extents

- [packExtent(resource:type:logicalOffset:physicalOffset:length:)](fsextentpacker/packextent%28resource_type_logicaloffset_physicaloffset_length_%29.md): Packs a single extent to send to the kernel.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSExtentPacker (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Declaration

```objectivec
@interface FSExtentPacker : NSObject
```

<a id="overview"></a>

## Overview

*Extents* provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. Rather than working with extents directly, you use this type’s methods to provide or “pack” extent information, which FSKit then passes to the kernel.

## Topics

### Packing extents

- [packExtentWithResource:type:logicalOffset:physicalOffset:length:](fsextentpacker/packextent%28resource_type_logicaloffset_physicaloffset_length_%29.md): Packs a single extent to send to the kernel.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
