> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supports2tbfiles](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supports2tbfiles)

# supports2TBFiles (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.

## Declaration

```swift
var supports2TBFiles: Bool { get set }
```

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.

# supports2TBFiles (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.

## Declaration

```objectivec
@property (nonatomic) BOOL supports2TBFiles;
```

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.
