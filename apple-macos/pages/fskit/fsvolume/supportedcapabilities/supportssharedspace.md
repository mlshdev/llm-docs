> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportssharedspace](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportssharedspace)

# supportsSharedSpace (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”

## Declaration

```swift
var supportsSharedSpace: Bool { get set }
```

## See Also

### Declaring volume capabilities

- [supportsVolumeGroups](supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.
- [doesNotSupportVolumeSizes](doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.

# supportsSharedSpace (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”

## Declaration

```objectivec
@property (nonatomic) BOOL supportsSharedSpace;
```

## See Also

### Declaring volume capabilities

- [supportsVolumeGroups](supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.
- [doesNotSupportVolumeSizes](doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.
