> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult](https://developer.apple.com/documentation/fskit/fsproberesult)

# FSProbeResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An object that represents the results of a specific probe.

## Declaration

```swift
class FSProbeResult
```

<a id="overview"></a>

## Overview

For any [result](fsproberesult/result.md) value other than [FSMatchResult.notRecognized](fsmatchresult/notrecognized.md), ensure the [name](fsproberesult/name.md) and [containerID](fsproberesult/containerid.md) values are non-`nil`. When a container or volume format doesn’t use a name, return an empty string. Also use an empty string in the case in which the format supports a name, but the value isn’t set yet.

Some container or volume formats may lack a durable UUID on which to base a container identifier. This situation is only valid for unary file systems. In such a case, return a random UUID.

With a block device resource, a probe operation may successfully get a result but encounter an error reading the name or UUID. If this happens, use whatever information is available, and provide an empty string or random UUID for the name or container ID, respectively.

## Topics

### Working with results

- [recognized(name:containerID:)](fsproberesult/recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usable(name:containerID:)](fsproberesult/usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimited(name:containerID:)](fsproberesult/usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimited](fsproberesult/usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognized](fsproberesult/notrecognized.md): A probe result for an unrecognized file system.

### Working with result properties

- [containerID](fsproberesult/containerid.md): The container identifier, as found during the probe operation.
- [name](fsproberesult/name.md): The resource name, as found during the probe operation.
- [result](fsproberesult/result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.

### Initializers

- [init(coder:)](fsproberesult/init%28coder_%29.md)

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
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

# FSProbeResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An object that represents the results of a specific probe.

## Declaration

```objectivec
@interface FSProbeResult : NSObject
```

<a id="overview"></a>

## Overview

For any [result](fsproberesult/result.md) value other than [FSMatchResultNotRecognized](fsmatchresult/notrecognized.md), ensure the [name](fsproberesult/name.md) and [containerID](fsproberesult/containerid.md) values are non-`nil`. When a container or volume format doesn’t use a name, return an empty string. Also use an empty string in the case in which the format supports a name, but the value isn’t set yet.

Some container or volume formats may lack a durable UUID on which to base a container identifier. This situation is only valid for unary file systems. In such a case, return a random UUID.

With a block device resource, a probe operation may successfully get a result but encounter an error reading the name or UUID. If this happens, use whatever information is available, and provide an empty string or random UUID for the name or container ID, respectively.

## Topics

### Working with results

- [recognizedProbeResultWithName:containerID:](fsproberesult/recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usableProbeResultWithName:containerID:](fsproberesult/usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimitedProbeResultWithName:containerID:](fsproberesult/usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimitedProbeResult](fsproberesult/usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognizedProbeResult](fsproberesult/notrecognized.md): A probe result for an unrecognized file system.

### Working with result properties

- [containerID](fsproberesult/containerid.md): The container identifier, as found during the probe operation.
- [name](fsproberesult/name.md): The resource name, as found during the probe operation.
- [result](fsproberesult/result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
