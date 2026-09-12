> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsextenttype](https://developer.apple.com/documentation/fskit/fsextenttype)

# FSExtentType (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of types of extents.

## Declaration

```swift
enum FSExtentType
```

## Topics

### Working with extent types

- [FSExtentType.data](fsextenttype/data.md): An extent type to indicate valid data.
- [FSExtentType.zeroFill](fsextenttype/zerofill.md): An extent type to indicate uninitialized data.
- [FSExtentType.readOnly](fsextenttype/readonly.md): An extent type to indicate read-only data.

### Working with raw values

- [init(rawValue:)](fsextenttype/init%28rawvalue_%29.md)

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
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

# FSExtentType (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of types of extents.

## Declaration

```objectivec
enum FSExtentType : NSInteger;
```

## Topics

### Working with extent types

- [FSExtentTypeData](fsextenttype/data.md): An extent type to indicate valid data.
- [FSExtentTypeZeroFill](fsextenttype/zerofill.md): An extent type to indicate uninitialized data.
- [FSExtentTypeReadOnly](fsextenttype/readonly.md): An extent type to indicate read-only data.

## See Also

### Supporting types

- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSMatchResult](fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.
