> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioflags](https://developer.apple.com/documentation/fskit/fscompleteioflags)

# FSCompleteIOFlags (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Flags that describe the behavior of an I/O completion operation.

## Declaration

```swift
struct FSCompleteIOFlags
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, the cases of this enumeration combine to create a bit field.

## Topics

### Declaring I/O completion behaviors

- [read](fscompleteioflags/read.md): A flag that describes a read operation.
- [write](fscompleteioflags/write.md): A flag that describes a write operation.
- [async](fscompleteioflags/async.md): A flag that requests that the file system module flush metadata I/O asynchronously.

### Working with raw values

- [init(rawValue:)](fscompleteioflags/init%28rawvalue_%29.md)

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

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSCompleteIOFlags (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Flags that describe the behavior of an I/O completion operation.

## Declaration

```objectivec
enum FSCompleteIOFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, the cases of this enumeration combine to create a bit field.

## Topics

### Declaring I/O completion behaviors

- [FSCompleteIOFlagsRead](fscompleteioflags/read.md): A flag that describes a read operation.
- [FSCompleteIOFlagsWrite](fscompleteioflags/write.md): A flag that describes a write operation.
- [FSCompleteIOFlagsAsync](fscompleteioflags/async.md): A flag that requests that the file system module flush metadata I/O asynchronously.

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
