> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockmapflags](https://developer.apple.com/documentation/fskit/fsblockmapflags)

# FSBlockmapFlags (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Flags that describe the behavior of a blockmap operation.

## Declaration

```swift
struct FSBlockmapFlags
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, you use the cases of this enumeration to create a bit field.

## Topics

### Declaring block map behaviors

- [read](fsblockmapflags/read.md): A flag that describes a read operation.
- [write](fsblockmapflags/write.md): A flag that describes a write operation.

### Working with raw values

- [init(rawValue:)](fsblockmapflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting types

- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSBlockmapFlags (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Flags that describe the behavior of a blockmap operation.

## Declaration

```objectivec
enum FSBlockmapFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, you use the cases of this enumeration to create a bit field.

## Topics

### Declaring block map behaviors

- [FSBlockmapFlagsRead](fsblockmapflags/read.md): A flag that describes a read operation.
- [FSBlockmapFlagsWrite](fsblockmapflags/write.md): A flag that describes a write operation.

## See Also

### Supporting types

- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
