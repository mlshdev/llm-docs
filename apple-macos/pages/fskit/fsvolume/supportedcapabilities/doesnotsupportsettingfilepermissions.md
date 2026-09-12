> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportsettingfilepermissions](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportsettingfilepermissions)

# doesNotSupportSettingFilePermissions (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t set file permissions.

## Declaration

```swift
var doesNotSupportSettingFilePermissions: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the volume doesn’t support setting file permissions.

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.

# doesNotSupportSettingFilePermissions (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t set file permissions.

## Declaration

```objectivec
@property (nonatomic) BOOL doesNotSupportSettingFilePermissions;
```

<a id="discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the volume doesn’t support setting file permissions.

## See Also

### Declaring file capabilities

- [supportsSparseFiles](supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
