> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibexportfeature](https://developer.apple.com/documentation/ituneslibrary/itlibexportfeature)

# ITLibExportFeature (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants describe the features that an iTunes library supports.

## Declaration

```swift
enum ITLibExportFeature
```

## Topics

### Export Features

- [ITLibExportFeature.none](itlibexportfeature/none.md): The iTunes library doesn’t support any export features.

### Initializers

- [init(rawValue:)](itlibexportfeature/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [features](itlibrary/features.md): Deprecated. A bitwise OR combination of the features of this library.
- [musicFolderLocation](itlibrary/musicfolderlocation.md): Deprecated. The location of the iTunes music folder.

# ITLibExportFeature (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants describe the features that an iTunes library supports.

## Declaration

```objectivec
enum ITLibExportFeature : NSUInteger;
```

## Topics

### Export Features

- [ITLibExportFeatureNone](itlibexportfeature/none.md): The iTunes library doesn’t support any export features.

## See Also

### Deprecated

- [features](itlibrary/features.md): Deprecated. A bitwise OR combination of the features of this library.
- [musicFolderLocation](itlibrary/musicfolderlocation.md): Deprecated. The location of the iTunes music folder.
