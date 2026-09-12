> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportssparsefiles](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportssparsefiles)

# supportsSparseFiles (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports sparse files.

## Declaration

```swift
var supportsSparseFiles: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A sparse file is a file that can have “holes” that the file system has never written to, and as a result don’t consume space on disk.

## See Also

### Declaring file capabilities

- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.

# supportsSparseFiles (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports sparse files.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsSparseFiles;
```

<a id="discussion"></a>

## Discussion

A sparse file is a file that can have “holes” that the file system has never written to, and as a result don’t consume space on disk.

## See Also

### Declaring file capabilities

- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.
