> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportsfaststatfs](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportsfaststatfs)

# supportsFastStatFS (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.

## Declaration

```swift
var supportsFastStatFS: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A true value means this volume hints to upper layers to indicate that `statfs(2)` is fast enough that its results need not be cached by the caller.

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.

# supportsFastStatFS (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsFastStatFS;
```

<a id="discussion"></a>

## Discussion

A true value means this volume hints to upper layers to indicate that `statfs(2)` is fast enough that its results need not be cached by the caller.

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.
