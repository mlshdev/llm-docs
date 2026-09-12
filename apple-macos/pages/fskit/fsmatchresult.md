> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmatchresult](https://developer.apple.com/documentation/fskit/fsmatchresult)

# FSMatchResult (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A type that represents the recognition and usability of a probed resource.

## Declaration

```swift
enum FSMatchResult
```

## Topics

### Working with match results

- [FSMatchResult.usable](fsmatchresult/usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResult.usableButLimited](fsmatchresult/usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResult.recognized](fsmatchresult/recognized.md): The probe recognizes the resource but can’t use it.
- [FSMatchResult.notRecognized](fsmatchresult/notrecognized.md): The probe doesn’t recognize the resource.

### Working with raw values

- [init(rawValue:)](fsmatchresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSMatchResult (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A type that represents the recognition and usability of a probed resource.

## Declaration

```objectivec
enum FSMatchResult : NSInteger;
```

## Topics

### Working with match results

- [FSMatchResultUsable](fsmatchresult/usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResultUsableButLimited](fsmatchresult/usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResultRecognized](fsmatchresult/recognized.md): The probe recognizes the resource but can’t use it.
- [FSMatchResultNotRecognized](fsmatchresult/notrecognized.md): The probe doesn’t recognize the resource.

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fsextenttype.md): An enumeration of types of extents.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
