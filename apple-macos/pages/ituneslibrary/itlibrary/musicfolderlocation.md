> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/ituneslibrary/itlibrary/musicfolderlocation

# musicFolderLocation (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the iTunes music folder.

> Use [mediaFolderLocation](mediafolderlocation.md) instead.

## Declaration

```swift
var musicFolderLocation: URL? { get }
```

## See Also

### Deprecated

- [features](features.md): Deprecated. A bitwise OR combination of the features of this library.
- [ITLibExportFeature](../itlibexportfeature.md): These constants describe the features that an iTunes library supports.

# musicFolderLocation (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the iTunes music folder.

> Use [mediaFolderLocation](mediafolderlocation.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * musicFolderLocation;
```

## See Also

### Deprecated

- [features](features.md): Deprecated. A bitwise OR combination of the features of this library.
- [ITLibExportFeature](../itlibexportfeature.md): These constants describe the features that an iTunes library supports.
